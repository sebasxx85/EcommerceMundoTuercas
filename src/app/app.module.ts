import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCursosComponent } from './componentes/lista-cursos/lista-cursos.component';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
    InicioComponent,
    ContactoComponent,
    PaginaNoEncontradaComponent,
    ToolbarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
