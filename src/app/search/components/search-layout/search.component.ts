import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private spotifyService: SpotifyService) {}
  artists: any[] = [];
  loading: boolean = false;
  error: string;

  search(keyword: string) {
    this.loading = true;
    this.spotifyService.search(keyword).subscribe(
      data => {
        this.artists = data;
        this.loading = false;
      },
      err => (this.error = err)
    );
  }
}
