import { Component ,OnInit} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton} from '@angular/material/button';


@Component({
  selector: 'app-registration',
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatFormField,

  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  ngOnInit() {}

  onsubmit(form: NgForm) {
    if(form.valid){
      const name = form.controls['nome'].value;
      const surname = form.controls['cognome'].value;
      const email = form.value.email;
      const password = form.value.password;

      console.log('form valid',form.value)
    }else{
      console.log('form invalid');
    }

  }
}
