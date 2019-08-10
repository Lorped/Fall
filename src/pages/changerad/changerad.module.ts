import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeradPage } from './changerad';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ChangeradPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeradPage),
    PipesModule,
  ],
})
export class ChangeradPageModule {}
