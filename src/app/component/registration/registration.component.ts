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
  constructor() {
  }
  ngOnInit() {}

  onsubmit(form: NgForm) {
    if (form.invalid) {
      console.log('Form non valido');
      return;
    }

    const formData = form.value;
    const user = {
      nome: formData.nome,
      cognome: formData.cognome,
      email: formData.email,
      password: formData.password,
    };


  }
}

