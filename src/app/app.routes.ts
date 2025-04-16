import { Routes } from '@angular/router';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {LoginComponent} from './component/login/login.component';
import {RegistrationComponent} from './component/registration/registration.component';


import {AuthGuard} from './auth/auth.guard';

import {TableComponent} from './component/table/table.component';
import {CostTableComponent} from './component/table/cost-table/cost-table.component';
import {EmployeeTableComponent} from './component/table/employee-table/employee-table.component';
import {Table2Component} from './component/table2/table2.component';
import {EmployeeOvertimeComponent} from './component/table2/employee-overtime/employee-overtime.component';
import {CostSummaryComponent} from './component/table2/cost-summary/cost-summary.component';
import {CantieriLottiComponent} from './component/cantieri-lotti/cantieri-lotti.component';
import {CantieriListComponent} from './component/cantieri-lotti/cantieri-list/cantieri-list.component';
import {LottiListComponent} from './component/cantieri-lotti/lotti-list/lotti-list.component';

export const routes: Routes = [
  {path: '', component: DashboardComponent,canActivateChild:[AuthGuard],children: [
    {path: '', redirectTo:'cantieri-lotti',pathMatch:'full'},
    {path: 'cantieri-lotti', component: CantieriLottiComponent,children:[
        {path: 'cantieri-list', component: CantieriListComponent},
        {path: 'lotti-list', component: LottiListComponent},
      ]},
    {path: 'table', component: TableComponent ,children:[
      {path: 'cost-table', component: CostTableComponent},
      {path: 'employee-table', component: EmployeeTableComponent},
      ]},
    {path: 'table2', component: Table2Component ,children:[
        {path: 'employee-overtime', component: EmployeeOvertimeComponent},
        {path: 'cost-summary', component: CostSummaryComponent},
      ]},
    ]},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},

];
