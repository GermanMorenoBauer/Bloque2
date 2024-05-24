export class Alumno {
    nombre;
    apellido;
    legajo;
    fechaNacimiento;
    edad;
    localizacion;
    nota1;
    nota2;

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;

    }

    nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }

    saludar(){
        console.log("Hola soy " + this.nombreCompleto());
    }

    saludarA(nombrePersona){
        console.log("Hola " + nombrePersona + ", me llamo " + this.nombreCompleto());
    }

    saludarAlumno(otroAlumno){
        console.log("Hola " + otroAlumno.nombreCompleto() + ", me llamo " + this.nombreCompleto());
    }
    //me gustaria saber fecha de nacimiento de cada alumno y ademas poder preguntarle cuantos años tiene*TERMINARLO*
    dameSuEdad(){
        const hoy = new Date();
        const fecha = new Date(this.fechaNacimiento);
        //TODO
        return 18;

    }

    vivisCercaDe(otroAlumno){
        return (this.localizacion.distanciaHasta(otroAlumno.localizacion)) < 20;

    }

    promedioAlumno(){
        return (this.nota1 + this.nota2)/2;

    }

    }