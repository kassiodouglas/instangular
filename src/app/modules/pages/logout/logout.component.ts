import { Component,OnInit , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { EmitterService } from 'src/app/services/emitter.service';
import { Auth } from 'src/app/core/Auth';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {
   
    Auth.destroy()
    EmitterService.get('onLogout').emit();
    this.router.navigate(['/']);    
    
  }


}
