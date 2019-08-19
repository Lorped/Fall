import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User, DatiUtente } from '../../providers/users';

/**
 * Generated class for the ChangepxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepx',
  templateUrl: 'changepx.html',
})
export class ChangepxPage {

  mieidati = new DatiUtente();
  olddati = new DatiUtente();
  pxtot = 0 ;
  px = 0 ;

  constructor(public user: User, public navCtrl: NavController, public navParams: NavParams) {

    this.mieidati = this.user.getinfo();
    this.olddati = Object.assign({}, this.mieidati);

    console.log (this.olddati);

    this.px = this.mieidati.px;
    this.pxtot = this.mieidati.px;

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ChangepxPage');
  }

  goback() {
    // this.navCtrl.push('LoginPage');
    this.navCtrl.pop();
  }

  cost(xx: number) {
    this.mieidati.Costituzione = this.mieidati.Costituzione + xx ;
    this.px = this.px - xx * 10 ;
    console.log ("cost" + this.mieidati.Costituzione ) ;
    console.log ("old cost" + this.olddati.Costituzione ) ;
  }

}
