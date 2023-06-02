<?php

namespace App\Http\Controllers;
use App\Models\Employee;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

     public function getUserCompanyID()
     {
         $com = Employee::select('company') -> where('user', '=', Auth::id()) -> first();
         if(!empty($com)){
             return $com['company'];
         }
         return $com;
     }

    public function index()
    {
        return view('home');
    }

    public function company()
    {
        $userCompanyId = $this -> getUserCompanyID();
        
        if (Auth::check() && !empty($userCompanyId)) 
        {
            $comapny = Company::where('ID', '=', $userCompanyId) -> first();
            return view('mycompany', [
                'comapny' => $comapny,
                'mainId' => "companymenu",
            ]);
        }
        else
        {
            return view('selectcompany',[
                'mainId' => "selectcompany"
            ]);
        }
    }
    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();
    
        $request->session()->invalidate();
    
        $request->session()->regenerateToken();
    
        return redirect('/');
    }
}
