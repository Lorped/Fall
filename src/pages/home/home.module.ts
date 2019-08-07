import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { TimesPipe } from '../../pipes/times/times';

@NgModule({
  declarations: [
    HomePage,
    TimesPipe,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
