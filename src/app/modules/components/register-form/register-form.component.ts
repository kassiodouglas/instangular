import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Users } from 'src/app/models/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: []
})

export class RegisterFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Users>();
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(''),
      login: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),

      password: new FormControl('', [Validators.required]),
      password_confirmation: new FormControl('', [Validators.required]),
    })
  }

  get login(){return this.form.get('login')}
  get name(){return this.form.get('name')}
  get email(){return this.form.get('email')}
  get password(){return this.form.get('password')}
  get password_confirmation(){return this.form.get('password_confirmation')}

  submit(){
    if(this.form.invalid)
      return

    this.onSubmit.emit(this.form.value)
  }

}
