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
    public function getUserCompanyID()
    {
        $com = Employee::select('company') -> where('user', '=', Auth::id()) -> first();
        if(!empty($com)){
            return $com['company'];
        }
        return $com;
    }

    public function list()
    {
        $userCompanyId = $this -> getUserCompanyID();
        if (Auth::check() && !empty($userCompanyId)) {
           $list = Book::where('companyId', '=', $userCompanyId) -> get();
            return view('reservationlist', [
                'list' => $list,
                'companyId' => $userCompanyId,
                'i' => 0
            ]);
        }
        else
        {
            return redirect('company');
        }
        
    }
    public function reservation(Request $request)
    {
        $userCompanyId = $this -> getUserCompanyID();
        if (Auth::id() && !empty($userCompanyId)) 
        {
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
            $val['date']) &&
            $this -> reserved($val['hourstart'],
            $val['minutestart'],
            $val['hourend'], 
            $val['minuteend'],
            $val['date']))
            { 
                $one = $val['hourstart'] . ":" . $val['minutestart'];
                $two = $val['hourend'] . ":" . $val['minuteend'];

                $reservation = new Book;

                $reservation -> companyId = $userCompanyId;
                $reservation -> name = $val['eventname'];
                $reservation -> date = $val['date'];
                $reservation -> start =  $one;
                $reservation -> end = $two;

                $reservation -> save();
                return redirect('')->with('success', 'Wydarzenie zostało dodane pomyślnie!');
            }
            else
            {
                if(!($this -> reserved($val['hourstart'],
                $val['minutestart'],
                $val['hourend'], 
                $val['minuteend'],
                $val['date'])))
                {
                    return redirect('')->with('fail', 'Jakieś wydarzenie już istnieje.');
                }
                return redirect('')->with('fail', 'Błędny wymiar godzin.');
            }
        }
        if(!(Auth::id()))
        {
            return redirect('/login');
        }
        return redirect('company');        
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
    private function reserved($starth, $startm, $koniech, $koniecm, $dzien)
    {
        $allreservation = Book::where('date','=',$dzien)->get();

        $rangestart = strtotime($starth . ":" .$startm);
        $rangeend = strtotime($koniech . ":" . $koniecm);

        foreach($allreservation as $one){
            $reservedstart = strtotime($one -> start);
            $reservedend = strtotime($one -> end);

            if (($rangestart >= $reservedstart && $rangestart < $reservedend)
            || ($rangeend > $reservedstart && $rangeend <= $reservedend)
            || ($reservedstart >= $rangestart && $reservedstart < $rangeend)
            || ($reservedend > $rangestart && $reservedend <= $rangeend))
            {
                return false; // Nakładanie się czasowe - rezerwacja jest już dokonana w tym czasie
            }
        }
        return true;
    }
}
