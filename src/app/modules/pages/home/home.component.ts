import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
 
  baseApiAvatar = environment.baseApiAvatar;
  newUsers:Users[] = [];

  constructor(private userService:UserService){}

  ngOnInit(){  

    Notiflix.Block.standard('.newUsersArea')
    this.userService.getAllUsers().subscribe((items)=>{
      const data = items.data;

      data.map(item=>{
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });

      this.newUsers = data;
    });   

    setTimeout(()=>{
      Notiflix.Block.remove('.newUsersArea')
    },1000)
    
  }




}
