import { Component } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Photos } from 'src/app/interfaces/photo';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  newUsers:Array<any> = [
    {url:'../../../../assets/img/user_default.png', username:"kassDoug", name:"Kássio Douglas"},
    {url:'../../../../assets/img/user_default.png', username:"dandarart", name:"Dandara Souza"},
    {url:'../../../../assets/img/user_default.png', username:"marletinha", name:"Marlete"},
    {url:'../../../../assets/img/user_default.png', username:"annajack", name:"Ana Jack"},
    {url:'../../../../assets/img/user_default.png', username:"neego", name:"Nego"},
    {url:'../../../../assets/img/user_default.png', username:"zico60", name:"Zico"},
  ]

}
