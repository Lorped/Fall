import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangevenomPage } from './changevenom';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ChangevenomPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangevenomPage),
    PipesModule,
  ],
})
export class ChangevenomPageModule {}
