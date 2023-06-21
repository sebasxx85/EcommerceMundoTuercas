import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { PaginaNoEncontradaComponent } from './core/componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { ListaCursosComponent } from './componentes/lista-cursos/lista-cursos.component';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';
import { LoginComponent } from './autenticacion/componentes/login/login.component';


const rutas: Routes = [
//Aca se manejan las rutas

{path: 'inicio', component: InicioComponent },
{path: 'contacto', component: ContactoComponent },
{path: 'login', component: LoginComponent },
{path: 'cursos', children: [

  {path: 'listar', component: ListaCursosComponent },
  {path: 'editar', component: EditarCursoComponent },
  {path: 'agregar', component: AgregarCursoComponent }

]},

{path: '', redirectTo: 'inicio', pathMatch: 'full' },
{path: '**', component: PaginaNoEncontradaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(rutas)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
