import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import configFile from '../../static/config.json';

// TODO: Add NGRX
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `${configFile.api.url}${query}`;

    const headers = new HttpHeaders({
      Authorization: configFile.api.token
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map(data => data['albums'].items)
    );
  }

  search(keyword: string) {
    return this.getQuery(
      `search?query=${keyword}&type=artist&market=CO&offset=0&limit=15`
    ).pipe(map(data => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map(data => data['tracks'])
    );
  }
}
