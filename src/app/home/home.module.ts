import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import * as fromComponents from './components';

const ROUTES: Routes = [{ path: '', component: fromComponents.HomeComponent }];

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, RouterModule.forChild(ROUTES)]
})
export class HomeModule {}
