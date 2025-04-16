import {Component, OnInit} from '@angular/core';

import {EmployeeOvertimeComponent} from './employee-overtime/employee-overtime.component';
import {CostSummaryComponent} from './cost-summary/cost-summary.component';
import {HttpClient} from '@angular/common/http';

import {EmployeeOvertimeService} from '../../service/employee-overtime.service';
import employeeOvertime from '../../../assets/employee-overtime.json';

@Component({
  selector: 'app-table2',
  imports: [
    EmployeeOvertimeComponent,
    CostSummaryComponent
  ],
  templateUrl: './table2.component.html',
  styleUrl: './table2.component.css'
})
export class Table2Component implements OnInit {

  data:any=[]; //versione salvata (mostrata nella tabella cost)
  editedOvertimeData:any=[]; //versione modificabile (passata all'employee-overtime)

  constructor(private http: HttpClient,private employeeOvertimeService: EmployeeOvertimeService) { }

  salva(edited:any){
    this.employeeOvertimeService.updateData(edited);
    this.data=edited;
  }
  ngOnInit() {
    this.data= this.employeeOvertimeService.getData();
    this.editedOvertimeData=JSON.parse(JSON.stringify(employeeOvertime));
  }
}
