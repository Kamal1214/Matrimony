import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserdataService } from "../services/userdata.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userData: any;
  constructor(public userDetails: UserdataService, public router: Router) {
    this.userData = this.userDetails.userDetails;
  }

  openUserDetails(value) {
    console.log(value);
    this.router.navigate(['/user-details', { user: JSON.stringify(value) }]);
  }

  openTinderPage(){
    this.router.navigate(['/tinder-cards']);
  }

}
