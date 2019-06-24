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
  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.router.params.subscribe(params => this.getArtist(params.id));
  }

  getArtist(id: string) {
    this.spotifyService
      .getArtist(id)
      .subscribe(artist => (this.artist = artist));
  }
}
