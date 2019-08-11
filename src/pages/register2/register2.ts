import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User, DatiUtente } from '../../providers/users';

/**
 * Generated class for the Register2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register2',
  templateUrl: 'register2.html',
})
export class Register2Page {

  mieidati = new DatiUtente();

  pxtot = 50;
  px = 50 ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.mieidati.username = window.localStorage.getItem( "FALLuserid" );
    this.mieidati.passwd = window.localStorage.getItem( "FALLpassword" );

    console.log(this.mieidati);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad Register2Page');
  }

}
