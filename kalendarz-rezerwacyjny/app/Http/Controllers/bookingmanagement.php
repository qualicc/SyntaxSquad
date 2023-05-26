<?php

namespace App\Http\Controllers;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\PostController;
use App\Models\Book;
use App\Models\Employee;


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
        $userCompanyId = Employee::select('company') -> where('user', '=', Auth::id()) -> first();
        if (Auth::id() && !empty($userCompanyId)) {
            $val = $request->validate([
                'eventname'  => 'required',
                'date'  => 'required',
                'hourstart' => 'required',
                'minutestart'   => 'required',
                'hourend' => 'required',
                'minuteend'   => 'required',
            ]);
            if(Auth::check() &&
            $this -> valTime( $val['hourstart'],
            $val['minutestart'],
            $val['hourend'], 
            $val['minuteend'],
            $val['date']))
            {
                
                $one = $val['hourstart'] . ":" . $val['minutestart'] . " " . $val['date'];
                $two = $val['hourend'] . ":" . $val['minuteend'] . " " . $val['date'];
                $oone = date($one);
                $ttwo = date($two);

                

                $reservation = new Book;

                $reservation -> companyId = $userCompanyId['company'];
                $reservation -> name = $val['eventname'];
                $reservation -> date = $val['date'];
                $reservation -> start =  $oone;
                $reservation -> end = $ttwo;

                $reservation -> save();
                return redirect('');
            }
        }
        else
        {
            return redirect('/login');
        }
        
    }
    private function valTime($starth, $startm, $koniech, $koniecm, $dzien)
    {
        $one = $starth . ":" .$startm . " " . $dzien;
        $two = $koniech . ":" . $koniecm . " " . $dzien;
        $oone = date($one);
        $ttwo = date($two);
        if($ttwo > $oone)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    public function deleteBooking($idbook)
    {
        $aplikacja = Book::where('id','=',$idbook) -> delete();
        return redirect('/');
    }
}
