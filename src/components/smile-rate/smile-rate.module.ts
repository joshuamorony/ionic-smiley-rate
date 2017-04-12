import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmileRate } from './smile-rate';

@NgModule({
  declarations: [
    SmileRate,
  ],
  imports: [
    IonicPageModule.forChild(SmileRate),
  ],
  exports: [
    SmileRate
  ]
})
export class SmileRateModule {}
