import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private subject = new Subject<any>();
// tslint:disable-next-line: typedef
sendClickEvent(){
this.subject.next();
}


// tslint:disable-next-line: typedef
getClickEvent(): Observable<any>{
return this.subject.asObservable();
}

}
