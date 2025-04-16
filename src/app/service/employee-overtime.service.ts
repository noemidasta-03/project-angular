import { Injectable } from '@angular/core';
import employeeOvertime from './../../assets/employee-overtime.json'
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeOvertimeService {

  months=['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre']

  constructor(private http: HttpClient) { }

  private data=JSON.parse(JSON.stringify(employeeOvertime));

  getMonths(){
    return this.months;
  }
  updateData(newData:any){
    this.data = newData;
  }
  getData(){
    return this.data;
  }
}
