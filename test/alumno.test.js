import { Alumno } from "../entities/alumno";

test("Le pregunto a Roberto su nombre completo y nos dice que es Roberto Perez", () => {
    //Configuramos los datos de prueba
    const unAlumno = new Alumno("Roberto","Perez");

    //Ejecutamos el metodo que queremos probar y nos guardamos su resultado
    const nombreCompleto = unAlumno.nombreCompleto();

    //Creamos el valor conocido - esperado
    const nombreCompletoEsperado = "Roberto Perez";

    //Asercion
    expect(nombreCompleto).toBe(nombreCompletoEsperado);
});


test("Le pregunto a Roberto su edad y nos dice que es 18", () => {
    //Configuramos los datos de prueba
    const unAlumno = new Alumno("Roberto","Perez");
    unAlumno.edad = 18;
    //Ejecutamos el metodo que queremos probar y nos guardamos su resultado
    const suEdad = unAlumno.dameSuEdad();

    //Creamos el valor conocido - esperado
    const suEdadDebeSer = 18;

    //Asercion
    expect(suEdad).toBe(suEdadDebeSer);
});