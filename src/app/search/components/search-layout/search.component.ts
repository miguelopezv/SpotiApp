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

  search(keyword: string) {
    this.spotifyService
      .search(keyword)
      .subscribe((data: any) => (this.artists = data));
  }
}
