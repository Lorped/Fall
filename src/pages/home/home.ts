import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User, DatiUtente } from '../../providers/users';




/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  mieidati = new DatiUtente();
  maxRAD = 3;
  maxVENOM = 3;

  constructor(public user: User, public navCtrl: NavController, public navParams: NavParams) {

    this.mieidati=this.user.getinfo();

    if (this.mieidati.Tempra == 1) {
      this.mieidati.RAD += 1;
      this.maxRAD += 1;
    }
    if (this.mieidati.Tempra == 2) {
      this.mieidati.RAD += 1;
      this.maxRAD += 1;
      this.mieidati.VENOM += 1;
      this.maxVENOM += 1;
    }
    if (this.mieidati.Tempra == 3) {
      this.mieidati.RAD += 2;
      this.maxRAD += 2;
      this.mieidati.VENOM += 1;
      this.maxVENOM += 1;
    }
    //console.log( this.user.getinfo() );
    //console.log(this.mieidati);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HomePage');
  }

  goback() {
    //this.navCtrl.push('LoginPage');
    this.navCtrl.pop();
  }


}
