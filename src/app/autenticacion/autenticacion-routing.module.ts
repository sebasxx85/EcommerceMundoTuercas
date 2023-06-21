import { NgModule } from "@angular/core"
import { LoginComponent } from "./componentes/login/login.component"
import { RouterModule, Routes } from "@angular/router"

const routes: Routes = [
    //Aca se manejan las rutas
    
    {path: 'login', component: LoginComponent },
    
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)

    ],
    exports: [
        RouterModule
    ]
})

export class AutenticacionRoutingModule{

}