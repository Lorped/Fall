import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangepxPage } from './changepx';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ChangepxPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangepxPage),
    PipesModule,
  ],
})
export class ChangepxPageModule {}
