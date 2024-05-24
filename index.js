import { Localizacion } from "./entities/localizacion.js";
import { Alumno } from "./entities/alumno.js";
import { Cursos } from "./entities/curso.js";

const unLugar = new Localizacion();
unLugar.nombre = "Medrano 951";

console.log(unLugar.nombre);

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
