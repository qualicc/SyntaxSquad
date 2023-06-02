<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\PostController;
use App\Models\Employee;
use App\Models\Companyrequest;
use App\Models\Company as firma;

class Company extends Controller
{
    public function getUserCompanyID()
    {
        $com = Employee::select('company') -> where('user', '=', Auth::id()) -> first();
        if(!empty($com)){
            return $com['company'];
        }
        return $com;
    }

    public function CreateCompany(Request $req): RedirectResponse
    {
        $val = $req->validate([
            'name' => 'required',
            'NIP' => 'required|digits:11',
        ]);
        
        $comp = New firma;
        $comp -> name = $req -> input('name');
        $comp -> nip = $req -> input('NIP');
        $comp -> save();
        $comapnyid = firma::select('id') -> where('nip', '=', $req -> input('NIP')) -> first();
        $firstemp = new Employee;
        $firstemp -> user = Auth::id();
        $firstemp -> company = $comapnyid['id'];
        $firstemp -> save();
        return redirect('company')->with('success', 'Założenie firmy pomyślne!');
    }
    public function leave()
    {
        $userCompanyId = Employee::where('user', '=', Auth::id()) -> delete();
        return redirect('/');
    }
    public function editform()
    {
        $userCompanyId = $this -> getUserCompanyID();
        $company = firma::where('id', '=', $userCompanyId) -> first();
        return view('editcompany',[
            'company' => $company,
            'mainId' => "editform"
        ]);
    }
    public function edit(Request $req)
    {
        $val = $req->validate([
            'name' => 'required',
            'id'  => 'required',
            'NIP' => 'required|digits:11',
        ]);
        $comapny = firma::where('id', '=', $val['id']) -> first();
        $comapny -> name =  $val['name'];
        $comapny -> nip =  $val['NIP'];
        $comapny -> save();
        return redirect('company');
    }
    public function request(Request $req)
    {
        
        $val = $req -> validate([
            'serchcomapny' => 'required',
        ]);
        
        $zaproszenie = new Companyrequest;
        $zaproszenie -> companyID = $val['serchcomapny'];
        $zaproszenie -> userID = Auth::id();
        $zaproszenie -> status = false;
        $zaproszenie -> save();
        return redirect('')->with('success', 'Wysłano pomyślne!');
    }
    public function list()
    {
        $userCompanyId = $this -> getUserCompanyID();
        $swoi = Employee::where('employee.company', '=', $userCompanyId) -> join('users', 'users.id', '=', 'employee.user') -> get();
        $aplikacje = Companyrequest::where('companyrequest.companyID', '=', $userCompanyId) -> where('companyrequest.status', '=', '0') -> join('users', 'users.id', '=', 'companyrequest.userID') -> get();
        return view("listemp", [
            "firma" => $swoi,
            "aplikacje" => $aplikacje,
            "mainId" => "listafirmy",
            "i" => 0,
            "ii" => 0,
        ]);
    }
    public function acceptApplication($companyID,$userid)
    {
        $aplikacja = Companyrequest::where('companyID','=',$companyID) -> where('userID','=',$userid) -> first();
        $aplikacja -> status = true;
        $aplikacja -> save();
        $empl = new Employee;
        $empl -> user = $userid;
        $empl -> company = $companyID;
        $empl -> save();
        return redirect('company');
    }
    public function deleteApplication($companyID,$userid)
    {
        $aplikacja = Companyrequest::where('companyID','=',$companyID) -> where('userID','=',$userid) -> delete();
        return redirect('company');
    }
    public function kickemployee($companyID, $userid)
    {
        $empl = Employee::where('company','=',$companyID) -> where('user','=',$userid) -> delete();
        return redirect('company');
    }
}
