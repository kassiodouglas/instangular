import { Component, Input } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Photos } from 'src/app/interfaces/photo';
import { PhotoService } from 'src/app/services/photo.service';
declare var window: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  postModalForm: any;
  modal: any;
  @Input() session:any = {logged:false};

  constructor(private photoService: PhotoService){}

  ngOnInit(){
    this.modal = document.querySelector('#postModalForm');
    this.postModalForm = new window.bootstrap.Modal(this.modal);

    
    this.modal.addEventListener('hidden.bs.modal', () => {
     this.modal.querySelector('form').reset()
    })
  }

  
  async createHandler(photos: Photos){
    const formData = new FormData()
   

    formData.append('title', photos.title)
    formData.append('description', photos.description)

    if(photos.photo){
      formData.append('photo', photos.photo)
    }

    await this.photoService.createPhoto(formData).subscribe();
    
    Notiflix.Notify.success('Foto registrada com sucesso!')

    this.postModalForm.hide();
    
  }
  
}
