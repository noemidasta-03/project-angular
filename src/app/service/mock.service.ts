import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http: HttpClient) { }

  getMockUsers(){
    return this.http.get<any[]>('assets/login.json');
  }
}
