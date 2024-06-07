<?php

namespace App\Http\Controllers;

use App\Models\Profesor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ProfesorController extends Controller
{
    public function index()
    {
        $profesores = Profesor::all();
        return response()->json(['profesor' => $profesores], 200);
    }

    public function show($id)
    {
        $profesor = Profesor::findOrFail($id);
        return response()->json(['profesor' => $profesor], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string',
            'apellido' => 'required|string',
            'email' => 'required|email|unique:profesores',
            'password' => 'required|string|min:6',
        ]);

        $profesor = Profesor::create([
            'nombre' => $request->nombre,
            'apellido' => $request->apellido,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['profesor' => $profesor], 201);
    }

    public function update(Request $request, $id)
    {
        $profesor = Profesor::findOrFail($id);

        $request->validate([
            'nombre' => 'string',
            'apellido' => 'string',
            'email' => 'email|unique:profesores,email,' . $profesor->id,
            'password' => 'string|min:6',
        ]);

        $profesor->update($request->all());

        return response()->json(['profesor' => $profesor], 200);
    }

    public function destroy($id)
    {
        $profesor = Profesor::findOrFail($id);
        $profesor->delete();

        return response()->json(null, 204);
    }
}
