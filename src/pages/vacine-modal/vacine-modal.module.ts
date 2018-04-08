import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VacineModalPage } from './vacine-modal';

@NgModule({
  declarations: [
    VacineModalPage,
  ],
  imports: [
    IonicPageModule.forChild(VacineModalPage),
  ],
})
export class VacineModalPageModule {}
