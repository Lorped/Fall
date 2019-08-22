import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User, DatiUtente } from '../../providers/users';

/**
 * Generated class for the AddpxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addpx',
  templateUrl: 'addpx.html',
})
export class AddpxPage {

  disablemeno: boolean = true;
  disablepiu: boolean = false ;
  newpx = 0 ;

  passwd = '';
  truepasswd = 'Domizia';

  mieidati = new DatiUtente();

  constructor(public user: User, public navCtrl: NavController, public navParams: NavParams) {
    this.mieidati = this.user.getinfo();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddpxPage');
  }

  goback() {
    this.navCtrl.pop();
  }

  piupx() {
    this.newpx += 10;
    if (this.newpx == 90) {
      this.disablepiu = true;
    }
    this.disablemeno = false;
  }

  menopx() {
    this.newpx -= 10;
    if (this.newpx == 0) {
      this.disablemeno = true;
    }
    this.disablepiu = false;
  }

  insert() {
    this.mieidati.px += this.newpx;
    this.newpx = 0 ;
    this.passwd = '';
    this.user.update(this.mieidati).subscribe((resp: any) => {

      this.mieidati = resp.user;

      this.navParams.get("parentPage").reload();

      alert("Aggiornamento Completo");

    }, (err) => {
      alert("Errore di Aggiornamento");
    });
    // console.log (this.mieidati);
  }

}
