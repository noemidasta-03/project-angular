import {Component, OnInit} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule, NgForm} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MockService} from '../../service/mock.service';



@Component({
  selector: 'app-login',
  imports: [
    MatLabel,
    MatFormField,
    MatInput,
    FormsModule,
    MatButton,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit {
  constructor(private mockService: MockService) {
  }
  ngOnInit() {}
  onsubmit(form: NgForm) {
    if(form.invalid){
      return console.log("form invalid")
    }

    const{email,password}=form.value;

    this.mockService.getMockUsers().subscribe(
      (users:any[])=>{
        const userFound= users.find((u:any)=>{
          return u.email === email && u.password === password})
        if(userFound){
          console.log(userFound,'login success')
        }else{
          alert('credenziali errate')
        }
      }
    )
  }
}

