import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  constructor() { }

  private static emitters: {
      [nameEvent: string]: EventEmitter<any>
  } = {}

  static get (nameEvent:string): EventEmitter<any> {
      if (!this.emitters[nameEvent])
          this.emitters[nameEvent] = new EventEmitter<any>();
      return this.emitters[nameEvent];
  }
}
