import { Component } from '@angular/core';
// import { trigger, transition, animate, state, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  // animations:[
  //   trigger('visibleHidden',[    
  //     state('void,hidden',style({transform: 'translate(0%,-2%) scale(1)',opacity:0})),
  //     state('visible',style({transform: 'translate(0%,0%) scale(1)',opacity:1})),
  //     transition('*=>visible', animate('450ms')),
  //     transition('*=>void,*=>hidden', animate('100ms'))
  //   ]
  //   )
  // ]
})

export class AppComponent {
  // isVisible = true
}
