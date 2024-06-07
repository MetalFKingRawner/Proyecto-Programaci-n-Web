<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profesor extends Model
{
    use HasFactory;

    protected $table = 'profesores'; // Especifica el nombre correcto de la tabla

    protected $fillable = ['nombre', 'apellido', 'email', 'password'];

    protected $hidden = ['password'];
}
