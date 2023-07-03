import { Component ,Output,EventEmitter} from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Photos } from 'src/app/interfaces/photo';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  @Output() onSubmit = new EventEmitter<Photos>()

  postForm!: FormGroup

  ngOnInit(): void{
    this.postForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      photo: new FormControl(''),
    })
  }

  get title(){
    return this.postForm.get('title')!;
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
