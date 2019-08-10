import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChangeradPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changerad',
  templateUrl: 'changerad.html',
})
export class ChangeradPage {

  disablemeno :boolean = false;
  disablepiu :boolean = false;

  localRAD = 0 ;
  maxRAD = 0 ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.localRAD = Number(window.localStorage.getItem( "FALLlocalRAD" ) );
    this.maxRAD = Number(window.localStorage.getItem( "FALLmaxRAD" ) );

    this.checkpiumeno();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ChangeradPage');
  }

  goback() {
    // this.navCtrl.push('LoginPage');
    this.navCtrl.pop();
  }

  piurad(){
    // console.log("piurad");
    this.localRAD++;
    window.localStorage.setItem( "FALLlocalRAD" , this.localRAD.toString() );
    this.disablepiu = true;
    this.checkpiumeno();

  }
  menorad(){
    // console.log("menorad");
    this.localRAD--;
    window.localStorage.setItem( "FALLlocalRAD" , this.localRAD.toString() );
    this.checkpiumeno();
  }

  checkpiumeno() {

    this.navParams.get("parentPage").reload();

    if (this.localRAD <= 0 ) {
      this.disablemeno = true;
      // console.log("disablemeno");
    } else {
      this.disablemeno = false;
    }
    if (this.localRAD == this.maxRAD ) {
      this.disablepiu = true;
      // console.log("disablepiu");
    } else {
      this.disablepiu = false;
    }
  }

}
