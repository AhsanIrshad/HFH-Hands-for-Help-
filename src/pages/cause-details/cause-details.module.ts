import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CauseDetailsPage } from './cause-details';

@NgModule({
  declarations: [
    CauseDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CauseDetailsPage),
  ],
})
export class CauseDetailsPageModule {}
