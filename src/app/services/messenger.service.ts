import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  // tslint:disable-next-line: typedef
  sendMsg(product: any) {
    console.log(product)
    this.subject.next(product);
  }

  // tslint:disable-next-line: typedef
  getMsg() {
    return this.subject.asObservable();
  }
}
