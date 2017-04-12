import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { SmileRateModule } from '../../components/smile-rate/smile-rate.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
	SmileRateModule,
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
