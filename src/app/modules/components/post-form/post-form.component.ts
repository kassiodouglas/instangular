import { Component ,Output,EventEmitter} from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Photos } from 'src/app/models/photo';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: []
})

export class PostFormComponent {
  
  @Output() onSubmit = new EventEmitter<Photos>();
  postForm!: FormGroup


  ngOnInit(): void{
    this.postForm = new FormGroup({
      id: new FormControl(''),    
      description: new FormControl('',[Validators.required]),
      photo: new FormControl(''),
    })
  }

  get description(){
    return this.postForm.get('description')!;
  }

  onFileSelect(event: any){
    const file: File = event.target.files[0];   
    this.postForm.patchValue({photo: file})
  }

  postModalFormSubmit(){
    if(this.postForm.invalid)
      return

    this.onSubmit.emit(this.postForm.value)
  }

}
