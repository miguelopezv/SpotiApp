import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  artist: any;
  topTracks: any[];
  error: string;

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.router.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtist(id: string) {
    this.spotifyService
      .getArtist(id)
      .subscribe(artist => (this.artist = artist), err => (this.error = err));
  }

  getTopTracks(id: string) {
    this.spotifyService
      .getTopTracks(id)
      .subscribe(
        topTracks => (this.topTracks = topTracks),
        err => (this.error = err)
      );
  }
}
