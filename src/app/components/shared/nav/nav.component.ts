import { SharedService } from './../../../services/shared.service';

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  clickEventSubscription: Subscription;


  constructor(private sharedService: SharedService) {

    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe(() =>{
      this.incrementCount();
    }

  );

}


count = 0;


// tslint:disable-next-line: typedef
ngOnInit() {

}
// tslint:disable-next-line: typedef
incrementCount(){
  this.count += 1;
  console.log(this.count)

}


}
