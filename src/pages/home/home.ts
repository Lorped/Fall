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

  constructor(public user: User, public navCtrl: NavController, public navParams: NavParams) {

    this.mieidati=this.user.getinfo();
    console.log( this.user.getinfo() );
    console.log(this.mieidati);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
