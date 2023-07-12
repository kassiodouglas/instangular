import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '../Router';

@Pipe({
  name: 'route'
})
export class RoutePipe implements PipeTransform {

  transform(name: string, ...args: Array<object>): String {
    // console.log(name)
    // console.log(args)
    return Router.path(name, args);
  }

}
