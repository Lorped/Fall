import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    
  }

}
