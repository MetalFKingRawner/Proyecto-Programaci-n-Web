<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use Illuminate\Http\Request;

class CursoController extends Controller
{
    // Listar todos los cursos
    public function index()
    {
        $cursos = Curso::all();
        return response()->json($cursos, 200);
    }

    // Mostrar un curso específico
    public function show($id)
    {
        $curso = Curso::find($id);
        if ($curso) {
            return response()->json($curso);
        } else {
            return response()->json(['message' => 'Curso no encontrado'], 404);
        }
    }

    // Crear un nuevo curso
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string|max:255',
            'descripcion' => 'required|string',
            'profesor_id' => 'required|exists:profesores,id',
        ]);

        $curso = Curso::create([
            'titulo' => $request->titulo,
            'descripcion' => $request->descripcion,
            'profesor_id' => $request->profesor_id,
        ]);

        return response()->json($curso, 201);
    }

    // Actualizar un curso existente
    public function update(Request $request, $id)
    {
        $curso = Curso::find($id);

        if (!$curso) {
            return response()->json(['message' => 'Curso no encontrado'], 404);
        }

        $request->validate([
            'titulo' => 'sometimes|required|string|max:255',
            'descripcion' => 'sometimes|required|string',
            'profesor_id' => 'sometimes|required|exists:profesores,id',
        ]);

        $curso->update($request->all());

        return response()->json($curso);
    }

    // Eliminar un curso
    public function destroy($id)
    {
        $curso = Curso::find($id);

        if (!$curso) {
            return response()->json(['message' => 'Curso no encontrado'], 404);
        }

        $curso->delete();

        return response()->json(['message' => 'Curso eliminado']);
    }
}
