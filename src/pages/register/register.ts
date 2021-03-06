import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/users';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  account: { username: string, password: string } = {
    username: '',
    password: '',
  };

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(public user: User, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad RegisterPage');
  }

  hideShowPassword() {
       this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
       this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
   }

   doLogin() {
     this.user.checkuserid(this.account.username).subscribe((resp: any) => {

        if (resp.status=='success') {
          window.localStorage.setItem( "FALLuserid" , this.account.username );
          window.localStorage.setItem( "FALLpassword" , this.account.password );
          this.navCtrl.push('Register2Page');
        } else {
          alert("Username già presente");
        }


     }, (err) => {
       console.log("resp: Error");
     });


   }
}
