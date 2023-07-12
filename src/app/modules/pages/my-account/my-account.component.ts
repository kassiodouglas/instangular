import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInput} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Auth } from 'src/app/core/Auth';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {

  session:any= Auth.get();
  baseApiAvatar = environment.baseApiAvatar;

}
