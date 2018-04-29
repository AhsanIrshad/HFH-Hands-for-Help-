import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { DashboardPage }from '../dashboard/dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  load() {

    this.navCtrl.push(SignupPage);
  }
  login() {
    this.navCtrl.push(DashboardPage);
  }
}
