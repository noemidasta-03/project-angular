import { Routes } from '@angular/router';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {LoginComponent} from './component/login/login.component';
import {RegistrationComponent} from './component/registration/registration.component';
import {Pagina1Component} from './component/pagina1/pagina1.component';
import {Pagina2Component} from './component/pagina2/pagina2.component';
import {Pagina3Component} from './component/pagina3/pagina3.component';
import {AuthGuard} from './auth/auth.guard';

export const routes: Routes = [
  {path: '', component: DashboardComponent,canActivateChild:[AuthGuard],children: [
    {path: '', redirectTo:'pagina1',pathMatch:'full'},
    {path: 'pagina1', component: Pagina1Component},
    {path: 'pagina2', component: Pagina2Component},
    {path: 'pagina3', component: Pagina3Component},
    ]},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},

];
