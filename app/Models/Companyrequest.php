<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Companyrequest extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "companyrequest";
    
    protected $fillable = [
        'id',
        'companyID',
        'userID',
        'status'
    ];

    protected $hidden = [
        
    ];
}
