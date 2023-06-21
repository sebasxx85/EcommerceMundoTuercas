import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { MaterialModule } from '../material.module';
import { SesionService } from './services/sesion.service';


@NgModule({
  declarations: [
    InicioComponent,
    PaginaNoEncontradaComponent,
    ToolbarComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [
    SesionService
  ],
  exports: [
    //se debe exportar ya que lo usa el app.component.html y este recibe del app module la info
    ToolbarComponent,
    MaterialModule
  ]
})
export class CoreModule { }
