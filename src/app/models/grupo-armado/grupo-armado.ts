export class GrupoArmado {

    nombre: string
    anio_inicio: Date
    ideologia: string
    description: string

    constructor() {
        this.nombre = ''
        this.anio_inicio = new Date() 
        this.ideologia = ''
        this.description = ''
    }
}
