import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import * as fromComponents from './components';
import { SpotifyService } from '../services/spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { CardModule, LoaderModule } from '../shared';

const ROUTES: Routes = [{ path: '', component: fromComponents.HomeComponent }];

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    CardModule,
    LoaderModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [SpotifyService]
})
export class HomeModule {}
