<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AlumnoController extends Controller
{
    public function index()
    {
        $alumnos = Alumno::all();
        return response()->json(['alumnos' => $alumnos], 200);
    }

    public function show($id)
    {
        $alumno = Alumno::findOrFail($id);
        return response()->json(['alumno' => $alumno], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string',
            'apellido' => 'required|string',
            'email' => 'required|email|unique:alumnos',
            'password' => 'required|string|min:6',
        ]);

        $alumno = Alumno::create([
            'nombre' => $request->nombre,
            'apellido' => $request->apellido,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['alumno' => $alumno], 201);
    }

    public function update(Request $request, $id)
    {
        $alumno = Alumno::findOrFail($id);

        $request->validate([
            'nombre' => 'string',
            'apellido' => 'string',
            'email' => 'email|unique:alumnos,email,' . $alumno->id,
            'password' => 'string|min:6',
        ]);

        $alumno->update($request->all());

        return response()->json(['alumno' => $alumno], 200);
    }

    public function destroy($id)
    {
        $alumno = Alumno::findOrFail($id);
        $alumno->delete();

        return response()->json(null, 204);
    }
}
