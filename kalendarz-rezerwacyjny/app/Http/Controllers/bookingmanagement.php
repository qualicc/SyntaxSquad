<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Employee;
use Illuminate\Support\Facades\Auth;

class Bookingmanagement extends Controller
{
    public function list()
    {
        $userCompanyId = Employee::select('company') -> where('user', '=', Auth::id()) -> first() ;
        if (Auth::check() && !empty($userCompanyId)) {
           $list = Book::where('companyId', '=', $userCompanyId['company']) -> get();
            return view('reservationlist', [
                'list' => $list,
                'companyId' => $userCompanyId['company'],
                'i' => 0
            ]);
        }
        else
        {
            return redirect('company');
        }
        
    }
    public function Reservation(Request $request)
    {
        if(Auth::check() &&
         $this -> valTime($request -> input('start'), $request -> input('end')))
        {
            $val = $request -> validate(
                [
                    'sala'  => 'require',
                    'name'  => 'require',
                    'date'  => 'require',
                    'start' => 'require',
                    'end'   => 'require',
                ]
            );
            $user = Auth::user();
            $companyId = $user -> companyId;

            $reservation = new Book;

            $reservation -> IDCompany = $companyId;
            $reservation -> name = $request -> input('name');
            $reservation -> date = $request -> input('date');
            $reservation -> start = $request -> input('start');
            $reservation -> end = $request -> input('end');

            $reservation -> save();
            return redirect('');
        }
    }
    private function valTime($start, $koniec)
    {
        if($start > $koniec)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
