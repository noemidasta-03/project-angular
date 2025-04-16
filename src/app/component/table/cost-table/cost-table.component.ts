import {Component, Input, OnInit} from '@angular/core';
import {EmployeeService} from '../../../service/employee.service';
import {DecimalPipe, NgForOf} from '@angular/common';
import  employees from './../../../../assets/employees.json';


@Component({
  selector: 'app-cost-table',
  imports: [
    NgForOf,
    DecimalPipe

  ],
  templateUrl: './cost-table.component.html',
  styleUrl: './cost-table.component.css'
})
export class CostTableComponent implements OnInit {

  @Input()employees:any=[]

  constructor(private employeesService:EmployeeService) { }

  ngOnInit() {}

  getMonths(){
    return this.employeesService.getMonths();
  }

  getEmployeeCost(emp:any){
    const monthlyCosts:number[]=[]
    for(let i=0; i < emp.ore.length; i++){
      monthlyCosts[i]=emp.ore[i]* emp.costoOrario;
    }
    return monthlyCosts;
  }

  getEmployeeTotalCost(emp:any){
    const costs= this.getEmployeeCost(emp);
    return costs.reduce((sum,c)=>sum+c,0);
  }


}
