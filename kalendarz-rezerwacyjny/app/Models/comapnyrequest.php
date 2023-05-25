<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class comapnyrequest extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'companyID',
        'userID',
    ];

    protected $hidden = [

    ];
}
