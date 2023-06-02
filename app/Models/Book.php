<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $table = "Book";
    public $timestamps = false;
    protected $fillable = [
        'ID',
        'companyId',
        'name',
        'date',
        'start',
        'end'
    ];
    protected $hidden = [

    ];
}
