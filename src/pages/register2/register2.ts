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

  pxtot = 30;
  px = 30 ;

  constructor(public user: User, public navCtrl: NavController, public navParams: NavParams) {

    this.mieidati.username = window.localStorage.getItem( "FALLuserid" );
    this.mieidati.passwd = window.localStorage.getItem( "FALLpassword" );

    //console.log(this.mieidati);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad Register2Page');
  }

  cost(xx: number) {
    this.mieidati.Costituzione = this.mieidati.Costituzione + xx ;
    this.px = this.px - xx * 10 ;
    // console.log ("cost" + this.mieidati.Costituzione ) ;
  }

  espl(xx: number) {
    this.mieidati.Esplosivi = this.mieidati.Esplosivi + xx ;
    this.px = this.px - xx * 10 ;
    // console.log ("espl" + this.mieidati.Esplosivi ) ;
  }

  scas(xx: number) {
    this.mieidati.Scasso = this.mieidati.Scasso + xx ;
    if ( xx > 0 && this.mieidati.Scasso == 1 ) {
      this.px = this.px  - 10  ;
    }
    if ( xx > 0 && this.mieidati.Scasso == 2 ) {
      this.px = this.px  - 20  ;
    }
    if ( xx > 0 && this.mieidati.Scasso == 3 ) {
      this.px = this.px  - 20  ;
    }
    if ( xx < 0 && this.mieidati.Scasso == 0 ) {
      this.px = this.px  + 10  ;
    }
    if ( xx < 0 && this.mieidati.Scasso == 1 ) {
      this.px = this.px  + 20  ;
    }
    if ( xx < 0 && this.mieidati.Scasso == 2 ) {
      this.px = this.px  + 20  ;
    }
    // console.log ("scas" + this.mieidati.Scasso ) ;
  }

  temp(xx: number) {
    this.mieidati.Tempra = this.mieidati.Tempra + xx ;
    this.px = this.px - xx * 10 ;
    // console.log ("Tempra" + this.mieidati.Tempra ) ;
  }

  chim(xx: number) {
    this.mieidati.Chimica = this.mieidati.Chimica + xx ;
    if ( xx > 0 && this.mieidati.Chimica == 1 ) {
      this.px = this.px  - 10  ;
    }
    if ( xx > 0 && this.mieidati.Chimica == 2 ) {
      this.px = this.px  - 20  ;
    }
    if ( xx > 0 && this.mieidati.Chimica == 3 ) {
      this.px = this.px  - 20  ;
    }
    if ( xx < 0 && this.mieidati.Chimica == 0 ) {
      this.px = this.px  + 10  ;
    }
    if ( xx < 0 && this.mieidati.Chimica == 1 ) {
      this.px = this.px  + 20  ;
    }
    if ( xx < 0 && this.mieidati.Chimica == 2 ) {
      this.px = this.px  + 20  ;
    }
    // console.log ("Chimica" + this.mieidati.Chimica ) ;
  }

  scie(xx: number) {
    this.mieidati.Scienza = this.mieidati.Scienza + xx ;
    if ( xx > 0 && this.mieidati.Scienza == 1 ) {
      this.px = this.px  - 10  ;
    }
    if ( xx > 0 && this.mieidati.Scienza == 2 ) {
      this.px = this.px  - 20  ;
    }
    if ( xx > 0 && this.mieidati.Scienza == 3 ) {
      this.px = this.px  - 20  ;
    }
    if ( xx < 0 && this.mieidati.Scienza == 0 ) {
      this.px = this.px  + 10  ;
    }
    if ( xx < 0 && this.mieidati.Scienza == 1 ) {
      this.px = this.px  + 20  ;
    }
    if ( xx < 0 && this.mieidati.Scienza == 2 ) {
      this.px = this.px  + 20  ;
    }
    // console.log ("Scienza" + this.mieidati.Scienza ) ;
  }

  ripa(xx: number) {
    this.mieidati.Riparazione = this.mieidati.Riparazione + xx ;

    if ( xx > 0 && this.mieidati.Riparazione < 4 ) {
      this.px = this.px  - 10  ;
    }
    if ( xx > 0 && this.mieidati.Riparazione == 4 ) {
      this.px = this.px  - 20  ;
    }
    if ( xx < 0 && this.mieidati.Riparazione < 3 ) {
      this.px = this.px  + 10  ;
    }
    if ( xx < 0 && this.mieidati.Riparazione == 3 ) {
      this.px = this.px  + 20  ;
    }
    // console.log ("Riparazione" + this.mieidati.Riparazione ) ;
  }

  medi(xx: number) {
    this.mieidati.Medicina = this.mieidati.Medicina + xx ;

    if ( xx > 0 && this.mieidati.Medicina < 4 ) {
      this.px = this.px  - 10  ;
    }
    if ( xx > 0 && this.mieidati.Medicina == 4 ) {
      this.px = this.px  - 20  ;
    }
    if ( xx < 0 && this.mieidati.Medicina < 3 ) {
      this.px = this.px  + 10  ;
    }
    if ( xx < 0 && this.mieidati.Medicina == 3 ) {
      this.px = this.px  + 20  ;
    }
    // console.log ("Medicina" + this.mieidati.Medicina ) ;
  }

  submit () {
    this.user.register(this.mieidati).subscribe((resp) => {

      alert("Registrazione Completa");
      // this.navCtrl.popToRoot();
      this.navCtrl.push('HomePage');
      // console.log( this.user.getinfo() );

    }, (err) => {
      alert("Errore di Registrazione");
    });
    // console.log (this.mieidati);
  }

}
