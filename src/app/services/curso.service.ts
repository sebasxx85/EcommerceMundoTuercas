import { Injectable } from '@angular/core';
import { Curso } from '../Models/curso';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = [

    {
      id: 1,
      nombre: 'SASS',
      comision: '34455',
      profesor: 'Andres',
      fechaInicio: new Date(2022, 3, 1),
      fechaFin: new Date(2022, 4, 1),
      InscripcionAbierta: true,
      imagen: 'http://blog.programacionytecnologia.com/wp-content/uploads/2023/06/Mejora-Tus-Disenos-Con-SASS.webp',
    },

    {
      id: 2,
      nombre: 'Azure',
      comision: '62555',
      profesor: 'Seba',
      fechaInicio: new Date(2022, 5, 5),
      fechaFin: new Date(2022, 8, 7),
      InscripcionAbierta: true,
      imagen: 'http://blog.programacionytecnologia.com/wp-content/uploads/2023/06/Microsoft-Azure-Porque-Aprender.png',

    },

    {
      id: 3,
      nombre: 'Python',
      comision: '12225',
      profesor: 'Pablo',
      fechaInicio: new Date(2022, 1, 3),
      fechaFin: new Date(2022, 2, 3),
      InscripcionAbierta: true,
      imagen: 'http://blog.programacionytecnologia.com/wp-content/uploads/2023/05/Analisis-de-datos-con-Python.jpg',
    },

    {
      id: 4,
      nombre: 'Hacking',
      comision: '66525',
      profesor: 'Camilo',
      fechaInicio: new Date(2022, 4, 8),
      fechaFin: new Date(2022, 6, 8),
      InscripcionAbierta: true,
      imagen: 'http://blog.programacionytecnologia.com/wp-content/uploads/2023/05/Hacking-etico-con-Python.jpg'
    }

  ];

  //con un subcriber me puedo subscribir a un observable y estar pendiente de los cambios dentro del observable
  //La clase subject me permite emitir nuevos eventos que estan dentro de un observable
  //tienen un objeto de tipo observable que retorna un arreglo de cursp
  //BehaviorSubject es hija de subject que me permite trabajar con un valor inicial

  private cursosSubject: BehaviorSubject<Curso[]>;


  constructor() {
    this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos)
  }

  obtenerCursos(): Observable<Curso[]> {
    return this.cursosSubject.asObservable();

  }

  //aca usaremos el map el pipe y su metodo map para filtrar un curso
  obtenerCurso(id: number): Observable<Curso[]>{
    return this.obtenerCursos().pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.id === id))
    )
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);

  }

  editarCurso(curso: Curso){}

  eliminarCurso(id: number){}


}
