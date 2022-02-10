import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticadoGuard } from './guards/autenticado.guard';
import { ConteinerComponent } from './layout/conteiner/conteiner.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'app',
    component: ConteinerComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canLoad: [AutenticadoGuard]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
