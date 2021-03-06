import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/share';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
 export class DatiUtente {
   public userid: number;
   public username: string;
   public passwd: string;
   public Nome: string;
   public Gruppo: string;
   public scheda: number;
   public Costituzione: number;
   public Riparazione: number;
   public Medicina: number;
   public Scasso: number;
   public Esplosivi :number;
   public Tempra: number;
   public Chimica: number;
   public Scienza: number;
   public RAD: number;
   public VENOM: number;
   public px: number;
   constructor () {
     this.userid = 0;
     this.username = '' ;
     this.passwd = '' ;
     this.Nome = '';
     this.Gruppo = '';
     this.scheda = 1;
     this.Costituzione =  0;
     this.Riparazione = 0;
     this.Medicina = 0;
     this.Scasso = 0;
     this.Esplosivi = 0;
     this.Tempra = 0;
     this.Chimica = 0;
     this.Scienza = 0;
     this.RAD = 3;
     this.VENOM = 3;
     this.px = 0;
   }
 }





@Injectable()
export class User {
  _user: any;
  url: string = 'https://www.roma-by-night.it/Fall/';

  constructor(public http: HttpClient) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    let seq = this.http.post( this.url + 'login.php', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
        console.error('ERROR');
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  getinfo() {
    return this._user;
  }



  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
    this._user.Costituzione = Number ( this._user.Costituzione);
    this._user.Riparazione = Number ( this._user.Riparazione);
    this._user.Medicina = Number ( this._user.Medicina);
    this._user.Scasso = Number ( this._user.Scasso);
    this._user.Esplosivi = Number ( this._user.Esplosivi);
    this._user.Tempra = Number ( this._user.Tempra);
    this._user.Chimica = Number ( this._user.Chimica);
    this._user.Scienza = Number ( this._user.Scienza);
    this._user.RAD = Number ( this._user.RAD);
    this._user.VENOM = Number ( this._user.VENOM);
    this._user.px = Number ( this._user.px);


    //console.log(this._user);
  }

  register ( accountInfo: any ) {
    let seq = this.http.post( this.url + 'register.php', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
        console.error('ERROR');
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  update ( accountInfo: any ) {
    let seq = this.http.post( this.url + 'update.php', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
        console.error('ERROR');
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  checkuserid ( accountInfo: string ) {
    let seq = this.http.post( this.url + 'check.php', accountInfo).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        //this._loggedIn(res);
        console.log('OK');
      } else {
        console.log('DUPLICATO');
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

}
