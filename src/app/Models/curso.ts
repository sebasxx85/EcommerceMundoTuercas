export interface Curso{
    id: number;
    nombre: string;
    comision: string;
    profesor: string;
    fechaInicio: Date;
    fechaFin: Date;
    //Las que vienen no se ocupan en curso-promise
    InscripcionAbierta: boolean;
    imagen: string; 
   
    
}