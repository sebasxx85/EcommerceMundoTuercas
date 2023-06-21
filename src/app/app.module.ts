import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCursosComponent } from './componentes/lista-cursos/lista-cursos.component';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
   
    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AutenticacionModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
