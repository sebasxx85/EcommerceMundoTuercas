import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/Models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  cursos$!: Observable<Curso[]>

  constructor(
    private CursoService: CursoService,
    private router: Router

  ){

  }

  ngOnInit(): void {

    this.cursos$ = this.CursoService.obtenerCursos();

  }
  //eliminar curso por id
  eliminarCurso(id: number){
    this.CursoService.eliminarCurso(id);

  }

  editarCurso(curso: Curso){
    this.router.navigate(['cursos/editar'])

  }
    

    





}

