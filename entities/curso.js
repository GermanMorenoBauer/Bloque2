export class Cursos{
    nombre;
    nombreDocente;
    cursadaDeAlumnos = [];
    materia;

    agregarAlumnos(unAlumno){
        this.cursadaDeAlumnos.push(unAlumno);
    }

    promedioDeEdadesAlumnos(){
        var sumaDeEdades = 0;
        for(var i = 0;i < this.cursadaDeAlumnos.length;i++){
            sumaDeEdades += this.cursadaDeAlumnos[i].alumno.dameSuEdad(); 
        }
        const cantAlumnos = this.cursadaDeAlumnos.length;
        return sumaDeEdades/cantAlumnos;
    }

    algunAlumnoViveCercaDeOtroAlumno(){
        var algunoViveCerca = false;
        var i = 0;
        while(i < this.cursadaDeAlumnos.length  && !algunoViveCerca){
                const alumnoActual = this.cursadaDeAlumnos[i].alumno;
                var j = i + 1;
                while(j < this.cursadaDeAlumnos.length && !algunoViveCerca){
                    const otroAlumno = this.cursadaDeAlumnos[j].alumno;
                    algunoViveCerca= alumnoActual.vivisCercaDe(otroAlumno);

                    j++;

                }
                i++;

        }

             return algunoViveCerca;
        }
        sosCursoDeGenteJoven(){
            return this.promedioDeEdadesAlumnos()< 22;
        }
        //quiero el promedio general del curso considerando que cada alumno en ese curso en particular tiene 2 calificaciones
        promedioGeneral(){
            //let sumaDeEdades
            return 8;

        }
        //si un curso tuvo desempeño bueno =si su promedio fue >=7
        suPromedioFueBueno(){
            promedioBueno = this.promedioGeneral
            return this.promedioGeneral >= 7;
    }
        todosAprobaron(){
            return this.cursadaDeAlumnos.every(c => c.fueAprobada());
        }
    }