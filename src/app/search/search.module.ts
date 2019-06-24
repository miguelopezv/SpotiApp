import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from '../shared';
import * as fromComponents from './components';

const ROUTES: Routes = [
  { path: '', component: fromComponents.SearchComponent }
];

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    CardModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [SpotifyService]
})
export class SearchModule {}
