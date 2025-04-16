import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeeOvertimeService} from '../../../service/employee-overtime.service';
import {NgForOf, NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-employee-overtime',
  imports: [
    NgForOf,
    MatButton,
    FormsModule,
    NgIf,
  ],
  templateUrl: './employee-overtime.component.html',
  styleUrl: './employee-overtime.component.css'
})
export class EmployeeOvertimeComponent implements OnInit {


  @Input()editedOvertimeEmployees:any=[];
  @Output()onSave=new EventEmitter<any>();

  months:any=[]
  inputClick=false

  constructor(
    private http: HttpClient,
    private employeeOvertimeService:EmployeeOvertimeService) {
  }
  ngOnInit() {
    this.months=this.employeeOvertimeService.getMonths();
  }

  onsave(){
    console.log(this.editedOvertimeEmployees)
    this.onSave.emit(this.editedOvertimeEmployees);
  }

  onInputClick(){
    this.inputClick=true;
  }



}
