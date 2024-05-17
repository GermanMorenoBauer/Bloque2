const juan = {
    //atributos
    nombre:"Juan",
    apellido: "Perez",
    legajo: 202034,
    //Metodos
    nombreCompleto: function(){
        return  this.nombre + " " + this.apellido;   
    },
    saludar: function(){
        console.log("Hola soy " + this.nombreCompleto());
    },
    presentarse: function(persona){
        console.log("Hola " + persona + ", me llamo " + this.nombreCompleto());
    }
};

console.log(juan.nombre);

juan.saludar();

juan.presentarse("German");

class Localizacion {
    latitud;
    longitud;
    constructor (lat, long){
        this.latitud = lat;
        this.longitud = long;
    }

    distanciaHasta(otroAlumno){
        const difAbs
        return  
    }
}


class Alumno {
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
        return ((this.nota1 + this.nota2)/2);

    }

     
    }

    

//instansiacion(estamos obteniendo un nuevo caso)
//instancia de roberto
const roberto = new Alumno("Roberto", "Perez");
//roberto.nombre = "Roberto";
//roberto.apellido = "Perez";
roberto.legajo = 20207;
roberto.saludar();
roberto.fechaNacimiento = "2002-10-05";
roberto.localizacion = new Localizacion(250,250);



//instancia de nadia
const nadia = new Alumno();
nadia.nombre = "Nadia";
nadia.apellido = "Sanchez";
nadia.legajo = 20208;
nadia.saludar();
nadia.localizacion = new Localizacion(200,250);

roberto.saludarAlumno(nadia);
nadia.saludarAlumno(roberto);

  //me gustaria saber fecha de nacimiento de cada alumno y ademas poder preguntarle cuantos años tiene
 const maria = new Alumno("Maria", "Fernandez");
 maria.saludar();

 class Cursos{
    nombre;
    nombreDocente;
    alumnos = [];

    agregarAlumnos(unAlumno){
        this.alumnos.push(unAlumno);
    }

    promedioDeEdadesAlumnos(){
        var sumaDeEdades = 0;
        for(var i = 0;i < this.alumnos.length;i++){
            sumaDeEdades += this.alumnos[i].dameSuEdad(); 
        }
        const cantAlumnos = this.alumnos.length;
        return sumaDeEdades/cantAlumnos;
    }

    algunAlumnoViveCercaDeOtroAlumno(){
        var algunoViveCerca = false;
        var i = 0;
        while(i < this.alumnos.length  && !algunoViveCerca){
                const alumnoActual = this.alumnos[1];
                var j = i + 1;
                while(j < this.alumnos.length && !algunoViveCerca){
                    const otroAlumno = this.alumnos[j];
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
        promedioCalificacionAlumnos(){
            var notas = nota1.Alumno + nota2;
        for(var i = 0;i < this.alumnos.length;i++){
            sumaDeEdades += this.alumnos[i].dameSuEdad(); 
        }
        const cantAlumnos = this.alumnos.length;
        return sumaDeEdades/cantAlumnos;
            
        }
    }


 const cursoDeDesarrollo = new Cursos();
 cursoDeDesarrollo.nombre = "Desarrollo de Software";
 cursoDeDesarrollo.agregarAlumnos(roberto);
 cursoDeDesarrollo.agregarAlumnos(nadia);
 cursoDeDesarrollo.agregarAlumnos(maria);

 console.log(cursoDeDesarrollo.promedioDeEdadesAlumnos());
 console.log(roberto.vivisCercaDe(maria));
