import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @Input() session:any = {logged:false}
  username:string = '';

  constructor(private route:ActivatedRoute){
    this.getUsername()
  }


  photos:Array<any> = [
    {url:'../../../../assets/img/photo_default.jpg'},
    {url:'../../../../assets/img/photo_default.jpg'},
    {url:'../../../../assets/img/photo_default.jpg'},
    {url:'../../../../assets/img/photo_default.jpg'},
    {url:'../../../../assets/img/photo_default.jpg'},
    {url:'../../../../assets/img/photo_default.jpg'},
    {url:'../../../../assets/img/photo_default.jpg'},
    {url:'../../../../assets/img/photo_default.jpg'}
  ]

  getUsername(){
    this.username = String(this.route.snapshot.paramMap.get('username'));
  }

}
