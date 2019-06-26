import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import * as fromComponents from './components';
import { CardModule, LoaderModule, ErrorHandlerModule } from '../shared';

const ROUTES: Routes = [{ path: '', component: fromComponents.HomeComponent }];

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    CardModule,
    LoaderModule,
    ErrorHandlerModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class HomeModule {}
