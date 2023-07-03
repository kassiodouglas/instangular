import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  session:object = {
    logged:true,
    name: 'Kassio Douglas',
    username: 'kassdoug',
    email: 'kass.doug@gmail.com'
  }

}
