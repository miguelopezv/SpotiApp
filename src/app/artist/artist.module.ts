import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: fromComponents.ArtistComponent }
];

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, RouterModule.forChild(ROUTES)]
})
export class ArtistModule {}
