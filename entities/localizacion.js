export class Localizacion {
    latitud;
    longitud;
    constructor (lat, long){
        this.latitud = lat;
        this.longitud = long;
    }

    distanciaHasta(otroPunto){
        const difAbsEntreLat = Math.pow(
            Math.abs(this.latitud - otroPunto.latitud), 2 
        );
        const difAbsEntreLong = Math.pow(
            Math.abs(this.longitud - otroPunto.longitud), 2 
        );
        return Math.sqrt(difAbsEntreLat + difAbsEntreLong);
    }
}
