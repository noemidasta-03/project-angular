import {Component, OnInit} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule, NgForm} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [
    MatLabel,
    MatFormField,
    MatInput,
    FormsModule,
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit {
  ngOnInit() {}
  onsubmit(form: NgForm) {
    if(form.valid){
      const email = form.value.email;
      const password = form.value.password;
      console.log('form valid',form.value);
    }else{
      console.log('form invalid');
    }
  }
}
