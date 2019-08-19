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

  nummark=4;

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

    window.localStorage.setItem( "FALLmaxRAD" , this.maxRAD.toString() );
    window.localStorage.setItem( "FALLlocalRAD" , this.mieidati.RAD.toString() );
    window.localStorage.setItem( "FALLmaxVENOM" , this.maxVENOM.toString() );
    window.localStorage.setItem( "FALLlocalVENOM" , this.mieidati.VENOM.toString() );
    // console.log( this.user.getinfo() );
    // console.log(this.mieidati);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad HomePage');
  }

  goback() {
    // this.navCtrl.push('LoginPage');
    this.navCtrl.popToRoot();
    // this.navCtrl.setRoot('LoginPage');

  }

  gopx() {
      this.navCtrl.push('ChangepxPage' , { "parentPage": this  } );
  }

  myRAD() {
    this.navCtrl.push('ChangeradPage' , { "parentPage": this  } );
  }

  myVENOM() {
    this.navCtrl.push('ChangevenomPage' , { "parentPage": this  } );

  }

  reload() {
    this.mieidati.RAD = Number(window.localStorage.getItem( "FALLlocalRAD" ) );
    this.mieidati.VENOM = Number(window.localStorage.getItem( "FALLlocalVENOM" ) );
  }

  cambiamark () {
    this.nummark -- ;
    this.nummark = this.nummark === -1 ? 4 : this.nummark ;
    // console.log(this.nummark);
  }


}
