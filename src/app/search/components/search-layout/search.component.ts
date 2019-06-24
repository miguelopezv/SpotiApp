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

  search(keyword: string) {
    this.loading = true;
    this.spotifyService.search(keyword).subscribe((data: any) => {
      this.artists = data;
      this.loading = false;
    });
  }
}
