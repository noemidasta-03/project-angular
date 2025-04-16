import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {EmployeeService} from '../../../service/employee.service';

@Component({
  selector: 'app-employee-table',
  imports: [
    NgForOf,
    FormsModule,
    MatButton,
    NgIf
  ],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  inputClick=false;
  months:any=[];
  @Input() editedEmployees:any=[];

  @Output()onSave=new EventEmitter<any>();

  onsave(){
    console.log(this.editedEmployees);
    this.onSave.emit(this.editedEmployees);
  }

  ngOnInit() {
    console.log('EmployeeTableComponent ngOnInit', this.editedEmployees);
    this.months= this.employeeService.getMonths();
  }

  onInputClick(){
    this.inputClick=true;
  }
}
