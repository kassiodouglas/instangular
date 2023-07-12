import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Auth } from 'src/app/models/auth';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: []
})
export class AuthFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Auth>();
  authForm!: FormGroup;


  ngOnInit(): void {
    this.authForm = new FormGroup({    
      login: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
    
  }

  get login(){return this.authForm.get('login')}
  get password(){return this.authForm.get('password')}

  submit(){
    if(this.authForm.invalid)
      return

    this.onSubmit.emit(this.authForm.value)
  }
  
}
