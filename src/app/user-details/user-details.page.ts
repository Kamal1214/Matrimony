import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  userdetails: any;

  constructor(public route: ActivatedRoute, public router: Router, public navCtrl: NavController) {
    this.userdetails = JSON.parse(this.route.snapshot.paramMap.get('user'));
  }

  ngOnInit() {
  }

  back() {
    this.navCtrl.pop();
  }

}
