<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\PostController;
use App\Models\Employee;
use App\Models\Company as firma;

class Company extends Controller
{
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
        return redirect('company');
    }
    public function leave()
    {
        $userCompanyId = Employee::where('user', '=', Auth::id()) -> delete();
        return redirect('/');
    }
    public function editform()
    {
        $userCompanyId = Employee::select('company') -> where('user', '=', Auth::id()) -> first();
        $company = firma::where('id', '=', $userCompanyId -> company) -> first();
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
    public function request()
    {
        # code...
    }
}
