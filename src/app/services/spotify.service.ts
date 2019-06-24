import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// TODO: Refactor TOKEN and routes
// TODO: Add NGRX
@Injectable()
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDTQh-aEtm3VK58TL7-Lor7SSsZCdq0O-m_1PnJ8iMEnXNvD_zXD6E7BKgHEBnHXNancYS0kIpsvtRPhMM'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers
    });
  }

  search(keyword: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDTQh-aEtm3VK58TL7-Lor7SSsZCdq0O-m_1PnJ8iMEnXNvD_zXD6E7BKgHEBnHXNancYS0kIpsvtRPhMM'
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?query=${keyword}&type=artist&market=CO&offset=0&limit=15`,
      {
        headers
      }
    );
  }
}
