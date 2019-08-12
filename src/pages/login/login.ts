import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../providers/users';


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

  constructor(public user: User, public navCtrl: NavController) {
    this.account.username=window.localStorage.getItem( "FALLuserid" );
    this.account.password=window.localStorage.getItem( "FALLpassword" );
    if (this.account.username != '' )  { this.saveme.checked = true; }


  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {

      if ( this.saveme.checked == true ) {
				window.localStorage.setItem( "FALLuserid" , this.account.username );
				window.localStorage.setItem( "FALLpassword" , this.account.password );
			} else {
				window.localStorage.removeItem( "FALLuserid" );
				window.localStorage.removeItem( "FALLpassword" );
			}

      this.navCtrl.push('HomePage');
      //console.log( this.user.getinfo() );

    }, (err) => {
      alert("Non autorizzato");
    });
  }

  createAccount() {
    this.navCtrl.push('RegisterPage');
    // this.navCtrl.setRoot('RegisterPage');
  }

}
