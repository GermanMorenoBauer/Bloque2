import { Localizacion } from "../entities/localizacion";

test ("La distancia entre los dos alumnos es mayor a 2 por lo tanto da false", () =>{
   
    const localizacion1 = new Localizacion(2,2);
    const localizacion2 = new Localizacion(4,4);
    
    //Ejecutamos el metodo que queremos probar y nos guardamos su resultado
    const  distanciaEntreAlumnos = Math.round(localizacion1.distanciaHasta(localizacion2));

    //Creamos el valor conocido - esperado
    const distanciaEntreAlumnosEsperada = 3;

    //Asercion
    expect(distanciaEntreAlumnos).toBe(distanciaEntreAlumnosEsperada);

})