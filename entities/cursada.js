export class Cursada {
    alumno;
    curso;
    calificaciones;

    constructor(alumno, curso){
        this.alumno = alumno;
        this.curso = curso;
        this.calificaciones = [];
    }

    agregarCalificacion(unaCalificacion){
        this.calificaciones.push(unaCalificacion);
    }
    // Promedio de la cursada del alumno
    promedio(){
        const cantCalificaciones = this.calificaciones.length;
        let sumaDeCalificaciones = 0;
        let i = 0;

        while(i < this.calificaciones.length) {
            sumaDeCalificaciones += this.calificaciones[i].nota;
            i++
        }

    /*    for(var i=0;i < cantCalificaciones;i++){
            sumaDeCalificaciones += this.calificaciones[i].nota;
        }
       */

        return sumaDeCalificaciones / cantCalificaciones;
    }
    //aprobo la cursada si alguna de sus notas fue mayor/igual a 6
    fueAprobada(){
        return this.calificaciones.some(c => c.nota >= 6 );
    }
}