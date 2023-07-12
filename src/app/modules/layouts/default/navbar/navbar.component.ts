import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Photos } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';
import { Users } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Auth as AuthModel} from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { EmitterService } from 'src/app/services/emitter.service';
import { Auth } from 'src/app/core/Auth';

declare var window: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  postModalForm: any;
  registerModalForm: any;
  authModalForm: any;
  modal: any;
  session!:any;
  
  constructor(
    private photoService: PhotoService,
    private userService: UserService,
    private authService: AuthService
    ){
      EmitterService.get('onLogin').subscribe(data=>this.session = Auth.get())
      EmitterService.get('onLogout').subscribe(data=>this.session = Auth.get())
    }

  ngOnInit(){   
    this.session = Auth.get();  
    
    this.modal = document.querySelector('#postModalForm');
    this.postModalForm = new window.bootstrap.Modal(this.modal);    
    this.modal.addEventListener('hidden.bs.modal', () => {
      this.modal.querySelector('form').reset()
    })


    this.modal = document.querySelector('#registerModalForm');
    this.registerModalForm = new window.bootstrap.Modal(this.modal);    
    this.modal.addEventListener('hidden.bs.modal', () => {
      this.modal.querySelector('form').reset()
    })


    this.modal = document.querySelector('#authModalForm');
    this.authModalForm = new window.bootstrap.Modal(this.modal);    
    this.modal.addEventListener('hidden.bs.modal', () => {
      this.modal.querySelector('form').reset()
    })
  }



  
  async createHandler(photos: Photos):Promise<void>{
    const formData = new FormData()  

    let user_id = String(Auth.get('id'));

    formData.append('description', photos.description)
    formData.append('user_id', user_id)

    if(photos.photo){
      formData.append('photo', photos.photo)
    }

    await this.photoService.createPhoto(formData).subscribe();
    
    Notiflix.Notify.success('Foto registrada com sucesso!')

    this.postModalForm.hide();
    
  }

  async submitRegisterForm(users:Users):Promise<void>{
    const formData = new FormData()  

    formData.append('login', users.login)
    formData.append('name', users.name)
    formData.append('email', users.email)
    formData.append('password', users.password!)
    formData.append('password_confirmation',  users.password_confirmation!)

    await this.userService.store(formData).subscribe(); 

    Notiflix.Notify.success('Usuário registrado com sucesso!')

    this.registerModalForm.hide();

  }

  async submitAuthForm(auth: AuthModel):Promise<void>{
    const formData = new FormData()  

    formData.append('login', auth.login)
    formData.append('password', auth.password!)
    formData.append('password', auth.password!)

    await this.authService.authentication(formData).subscribe({
      next: (response) =>{    
        
        const data = response.data;

        if(response.error){
          Notiflix.Notify.warning(response.error)
          return
        }       


        data.logged = true
        Auth.set(data)   
        this.session = Auth.get()     
        this.authModalForm.hide();
        EmitterService.get('onLogin').emit()


      },
      error: (error) => {
        console.error(error)
        let msg = `${error.status} - ${error.statusText}`
        Notiflix.Notify.failure(msg)
      }
    });
    



   

  }
  
}
