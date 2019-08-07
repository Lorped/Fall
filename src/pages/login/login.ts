import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  account: { username: string, password: string } = {
    username: '',
    password: ''
  };
  saveme= {
    checked: false
  };

  userid = 0;

  constructor(public navCtrl: NavController) {
    this.account.username=window.localStorage.getItem( "FALLuserid" );
    this.account.password=window.localStorage.getItem( "FALLopassword" );
    if (this.account.username != '' )  { this.saveme.checked = true; }


  }

}
