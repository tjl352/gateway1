import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Gateway1SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Gateway1SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Gateway1HomeModule {}
