import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChangevenomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changevenom',
  templateUrl: 'changevenom.html',
})
export class ChangevenomPage {

  disablemeno :boolean = false;
  disablepiu :boolean = false;

  localVENOM = 0 ;
  maxVENOM = 0 ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.localVENOM = Number(window.localStorage.getItem( "FALLlocalVENOM" ) );
    this.maxVENOM = Number(window.localStorage.getItem( "FALLmaxVENOM" ) );

    this.checkpiumeno();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ChangevenomPage');
  }

  goback() {
    // this.navCtrl.push('LoginPage');
    this.navCtrl.pop();
  }

  piuvenom(){
    // console.log("piuvenom");
    this.localVENOM++;
    window.localStorage.setItem( "FALLlocalVENOM" , this.localVENOM.toString() );
    this.disablepiu = true;
    this.checkpiumeno();

  }
  menovenom(){
    // console.log("menovenom");
    this.localVENOM--;
    window.localStorage.setItem( "FALLlocalVENOM" , this.localVENOM.toString() );
    this.checkpiumeno();
  }

  checkpiumeno() {

    this.navParams.get("parentPage").reload();

    if (this.localVENOM <= 0 ) {
      this.disablemeno = true;
      // console.log("disablemeno");
    } else {
      this.disablemeno = false;
    }
    if (this.localVENOM == this.maxVENOM ) {
      this.disablepiu = true;
      // console.log("disablepiu");
    } else {
      this.disablepiu = false;
    }
  }

}
