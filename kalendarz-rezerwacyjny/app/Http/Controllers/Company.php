<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Company extends Controller
{
    public function CreateCompany(Request $req)
    {
        $val = $req -> validate(
            [
                'name' => 'require',
                'NIP' => 'require,digits:11'
            ]
        );
        $comp = New Company;
        $comp -> name = $request -> input('name');
        $comp -> name = $request -> input('NIP');
        $comp -> save();
        return redirect();
    }

}
