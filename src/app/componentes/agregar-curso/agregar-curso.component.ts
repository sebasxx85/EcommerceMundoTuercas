import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/Models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {

  formulario!: FormGroup;
  

  constructor(
    //vamos a inyectar el servicio de cursoService que la usamos como una API
    private cursoService: CursoService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      comision: new FormControl(),
      profesor: new FormControl(),
      inicio: new FormControl(),
      fin: new FormControl(),
      InscripcionAbierta: new FormControl()

    })

  }

  agregarCurso(){
    const curso: Curso = {
      id: Math.round(Math.random()*1000),
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      profesor: this.formulario.value.profesor,
      InscripcionAbierta: this.formulario.value.InscripcionAbierta,
      imagen: 'http://blog.programacionytecnologia.com/wp-content/uploads/2023/06/Mejora-Tus-Disenos-Con-SASS.webp'
      
    };
    //para probar que se gareguen los elementos hacemos console.log
    //console.log(curso);
    this.cursoService.agregarCurso(curso);

    //con lo siguiente al crear un curso me redirige a listar
    //localhost/cursos/listar
    this.router.navigate(['cursos', 'listar'])


  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
