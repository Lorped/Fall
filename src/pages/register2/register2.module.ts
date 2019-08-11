import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Register2Page } from './register2';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    Register2Page,
  ],
  imports: [
    IonicPageModule.forChild(Register2Page),
    PipesModule,
  ],
})
export class Register2PageModule {}
