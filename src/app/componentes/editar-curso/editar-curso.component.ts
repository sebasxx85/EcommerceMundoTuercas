import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent {
  formulario: FormGroup;
  
  constructor(){
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      comision: new FormControl(),
      profesor: new FormControl(),
      inicio: new FormControl(),
      fin: new FormControl(),
      InscripcionAbierta: new FormControl()

    })
  }

  editarCurso(){
    
  }

}
