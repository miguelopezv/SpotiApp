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
      Authorization: sessionStorage.getItem('token')
    });

    return this.http.get(url, { headers });
  }

  getToken(): any {
    return this.http.get(configFile.api.herokuUrl).pipe(
      map((data: any) => {
        sessionStorage.setItem('token', `Bearer ${data.access_token}`);
      })
    );
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
