import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardModule, LoaderModule, ErrorHandlerModule } from '../shared';
import * as fromComponents from './components';

const ROUTES: Routes = [
  { path: '', component: fromComponents.SearchComponent }
];

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
export class SearchModule {}
