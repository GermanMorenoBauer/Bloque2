import { Cursada } from "../entities/cursada";
import { Calificacion } from "../entities/calificacion";

test("Saca 4 y 6 y aprueba la cursada", () => {
    //Configuramos los datos de prueba
    const cursada = new Cursada(null,null);
    
    const calificacion1= new Calificacion();
    calificacion1.nota = 4;
    const calificacion2= new Calificacion();
    calificacion2.nota = 6;

    cursada.agregarCalificacion(calificacion1);
    cursada.agregarCalificacion(calificacion2);
    
    //Ejecutamos el metodo que queremos probar y nos guardamos su resultado
    const  aproboCursada = cursada.fueAprobada();

    //Creamos el valor conocido - esperado
    const aproboCursadaEsperada = true;

    //Asercion
    expect(aproboCursada).toBe(aproboCursadaEsperada);
});

test("Saca 4 y 4 y no aprueba la cursada", () => {
    //Configuramos los datos de prueba
    const cursada = new Cursada(null,null);
    
    const calificacion1= new Calificacion();
    calificacion1.nota = 4;
    const calificacion2= new Calificacion();
    calificacion2.nota = 4;

    cursada.agregarCalificacion(calificacion1);
    cursada.agregarCalificacion(calificacion2);
    
    //Ejecutamos el metodo que queremos probar y nos guardamos su resultado
    const  aproboCursada = cursada.fueAprobada();

    //Creamos el valor conocido - esperado
    const aproboCursadaEsperada = false;

    //Asercion
    expect(aproboCursada).toBe(aproboCursadaEsperada);
});

test("El alumno tiene 3 notas(4,6,8),el promedio es 6", () => {
    //Configuramos los datos de prueba
    const cursada = new Cursada(null,null);
    
    const calificacion1= new Calificacion();
    calificacion1.nota = 4;
    const calificacion2= new Calificacion();
    calificacion2.nota = 6;
    const calificacion3= new Calificacion();
    calificacion3.nota = 8;

    cursada.agregarCalificacion(calificacion1);
    cursada.agregarCalificacion(calificacion2);
    cursada.agregarCalificacion(calificacion3);

    console.log(cursada);
    
    //Ejecutamos el metodo que queremos probar y nos guardamos su resultado
    const  promedioCursada = cursada.promedio();

    //Creamos el valor conocido - esperado
    const promedioCursadaEsperado = 6;

    //Asercion
    expect(promedioCursada).toBe(promedioCursadaEsperado);
});