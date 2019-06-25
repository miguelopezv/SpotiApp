import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newReleases: any[];
  error: any;

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService
      .getNewReleases()
      .subscribe(
        (data: any) => (this.newReleases = data),
        (err: any) => (this.error = err.error.error.message)
      );
  }
}
