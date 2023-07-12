import { Pipe, PipeTransform } from '@angular/core';
import { Auth } from './core/Auth';

@Pipe({
  name: 'auth'
})
export class AuthPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return Auth.get(value);
  }

}
