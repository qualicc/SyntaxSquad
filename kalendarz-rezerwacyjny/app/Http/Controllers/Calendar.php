<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Book;

class Calendar extends Controller
{
    public function index()
    {
        $books = Book::get();
        $json = html_entity_decode($books -> toJson());
        return view('kalendarz',[
            'rezerwacje' => $json,
            'title' => "kalenderz",
            'mainId' => "kalendarz"
        ]);
    }
}
