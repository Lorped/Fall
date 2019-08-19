import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User, DatiUtente } from '../../providers/users';
import { AlertController } from 'ionic-angular';

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

  maxRAD = 3;
  maxVENOM = 3;

  constructor(public user: User, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

    this.mieidati = this.user.getinfo();
    this.olddati = Object.assign({}, this.mieidati);

    // console.log (this.olddati);

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

  submit() {
    let alert = this.alertCtrl.create({
      title: 'Confermi la spesa PX',
      message: 'Sei VERAMENTE sicuro di voler usare in quel modo i tuoi px?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.submit2() ;
          }
        }
      ]
    });
    alert.present();
  }


  submit2() {
    this.mieidati.px = this.px ;
    this.user.update(this.mieidati).subscribe((resp: any) => {

      this.mieidati = resp.user;
      this.olddati = Object.assign({}, this.mieidati);

      this.pxtot = this.px;

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

      this.navParams.get("parentPage").reload();

      alert("Aggiornamento Completo");

    }, (err) => {
      alert("Errore di Aggiornamento");
    });
    // console.log (this.mieidati);
  }

}
