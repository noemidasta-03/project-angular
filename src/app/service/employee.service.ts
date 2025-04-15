import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import  employees from './../../assets/employees.json';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  months=['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre']


  private data= JSON.parse(JSON.stringify(employees));

  getData(){
    return this.data;
  }
  getMonths(){
    return this.months;
  }
  updateData(newData:any){
    this.data = newData;
  }

}
