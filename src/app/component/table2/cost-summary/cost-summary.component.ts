import {Component, Input, OnInit} from '@angular/core';
import {DecimalPipe, NgForOf} from '@angular/common';
import {EmployeeOvertimeService} from '../../../service/employee-overtime.service';

@Component({
  selector: 'app-cost-summary',
  imports: [
    NgForOf,
    DecimalPipe
  ],
  templateUrl: './cost-summary.component.html',
  styleUrl: './cost-summary.component.css'
})
export class CostSummaryComponent implements OnInit {

  @Input()employOvertime:any=[]

  constructor(private employeeOvertimeService: EmployeeOvertimeService) {}

  ngOnInit() {}
  getMonths(){
    return this.employeeOvertimeService.getMonths();
  }

  getCostMonth(emp:any){
    const monthCost:number[]=[];
    for(let i=0; i< emp.oreStraordinarie.length; i++){
      monthCost[i]=emp.oreStraordinarie[i] *emp.costoOrarioStraordinario;
    }
    return monthCost;
  }

  getTotalCostMonth(emp:any){
    const costs=this.getCostMonth(emp);
    return costs.reduce((sum,c)=>sum+c,0)
  }


}
