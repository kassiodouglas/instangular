import { Component, Input, Inject,Output,EventEmitter } from '@angular/core';
import { EmitterService } from 'src/app/services/emitter.service';
import { environment } from 'src/environments/environment';
import { Auth } from 'src/app/core/Auth';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import * as Notiflix from 'notiflix';
import { Response } from 'src/app/models/response';
import { PhotoService } from 'src/app/services/photo.service';


export interface Comment{
  id:Number,
  comment:string
}

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  @Output() onSubmit = new EventEmitter<Comment>();
  session:any;
  @Input() idPhoto!:Number|any;  
  @Input() dataPhoto!:Number|any;  
  formComment!:FormGroup;

  commentInputValue:string = '';

  baseApiPhotos = environment.baseApiPhotos;
  baseApiAvatar = environment.baseApiAvatar;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commentService:CommentService ,
    private photoService:PhotoService 
    ) {}

  ngOnInit(){   
    this.formComment = new FormGroup({
      id: new FormControl(this.data.id, [Validators.required]),
      comment: new FormControl(this.commentInputValue, [Validators.required]),
    })

    this.session = Auth.get();    

    EmitterService.get('onLogout').subscribe(this.session = Auth.get())

    EmitterService.get('onLogin').subscribe(this.session = Auth.get())
 
  }

  get comment(){return this.formComment.get('comment')}

  
  async submit(){     

    if(this.formComment.invalid)
      return

    Notiflix.Block.standard('.footer')

    const formData = new FormData()  
    formData.append('photo_id', this.formComment.value.id)
    formData.append('user_id', this.session.id) 
    formData.append('comment', this.formComment.value.comment) 

    const reposne = await this.commentService.store(formData).subscribe({
       next: async(response) =>{   

        const reposne2 = await this.photoService.getUserPhoto(this.data.user.login ,this.formComment.value.id).subscribe({
          next: (response) =>{    
    
            const data = response.data[0];   
            this.data = data    
    
            this.commentInputValue = ''
            Notiflix.Block.remove('.footer')
          },
          error: (error) => console.error(error)
        })

        
      },
      error: (error) => console.error(error)

    })




   
    


    
 
  }

}
