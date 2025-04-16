import {Component, OnInit} from '@angular/core';
import {EmployeeTableComponent} from './employee-table/employee-table.component';
import {CostTableComponent} from './cost-table/cost-table.component';
import {HttpClient} from '@angular/common/http';
import {EmployeeService} from '../../service/employee.service';
import employees from './../../../assets/employees.json'

@Component({
  selector: 'app-table',
  imports: [
    EmployeeTableComponent,
    CostTableComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

  data:any=[];
  editedData:any=[];
  constructor(private http: HttpClient,private employeeService: EmployeeService) { }


  salva(edited:any){
    this.employeeService.updateData(edited);
    this.data= edited;
  }

  ngOnInit() {
    this.data= this.employeeService.getData();
    this.editedData= JSON.parse(JSON.stringify(employees));
  }
}
