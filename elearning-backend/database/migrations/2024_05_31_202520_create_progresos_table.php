<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProgresosTable extends Migration
{
    public function up()
    {
        Schema::create('progresos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('leccion_id')->constrained('lecciones')->onDelete('cascade');
            $table->foreignId('alumno_id')->constrained('alumnos')->onDelete('cascade');
            $table->integer('progreso')->check('progreso >= 0 AND progreso <= 100');
            $table->timestamp('fecha_actualizacion')->useCurrent();
        });
    }

    public function down()
    {
        Schema::dropIfExists('progresos');
    }
}
