import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCausePage } from './add-cause';

@NgModule({
  declarations: [
    AddCausePage,
  ],
  imports: [
    IonicPageModule.forChild(AddCausePage),
  ],
})
export class AddCausePageModule {}