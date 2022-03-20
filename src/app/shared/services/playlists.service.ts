import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  constructor(
    private service: RequestService
  ) { }

  getPlaylists(params: object = {}): Observable<any> {

    return this.service.get('/v1/me/playlists', params);
  }
  getPlayListById(id: string): Observable<any> {
    return this.service.get(`/v1/playlists/${id}`);
  }

  getShows(): Observable<any> {
    return this.service.get(`/v1/me/shows`);
  }
  getAlbums(): Observable<any> {
    return this.service.get(`/v1/me/albums`);
  }
  getAlbumsById(id: string): Observable<any> {
    return this.service.get(`/v1/albums/${id}`);
  }
  getFollowing(): Observable<any> {
    return this.service.get(`/v1/me/following`);
  }
  getEpisodes(): Observable<any> {
    return this.service.get(`/v1/me/episodes`);
  }
  getSearch(): Observable<any> {
    return this.service.get(`/v1/search`);
  }


}
