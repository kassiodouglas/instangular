import { Component, Input, Inject } from '@angular/core';
import { EmitterService } from 'src/app/services/emitter.service';
import { environment } from 'src/environments/environment';
import { Auth } from 'src/app/core/Auth';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  
  session:any;
  @Input() idPhoto!:Number|any;  
  @Input() dataPhoto!:Number|any;  

  baseApiPhotos = environment.baseApiPhotos;
  baseApiAvatar = environment.baseApiAvatar;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.session = Auth.get();    

    EmitterService.get('onLogout').subscribe(
      this.session = Auth.get()
    )

    EmitterService.get('onLogin').subscribe(
      this.session = Auth.get()
    )
  }

}
