import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';
import { SpotifyConfiguration } from 'src/environments/environment';
import { SpotifyPlaylistParaPlaylist } from '../helper/spotifyHelper';
// import { IPlaylist } from '../Interfaces/IPlaylist';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs = null;
  usuario: IUsuario;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  async inicializarUsuario() {
    if (!!this.usuario)
      return true;

    const token = localStorage.getItem('token');

    if (!token)
      return false;

    try {

      this.definirAccessToken(token);
      await this.obterSpotifyUsuario();
      console.log('usuario');
      return !!this.usuario;

    } catch (ex) {
      return false;
    }
  }

  async obterSpotifyUsuario() {
    const userInfo = await this.spotifyApi.getMe();

    this.usuario = this.SpotifyUserParaUsuario(userInfo);



  }

  obterUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }
  definirAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }
  obterTokenUrlCallback() {
    if (!window.location.hash)
      return '';

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  async buscarPlaylistUsuario(offset = 0, limit = 50): Promise<any[]> {
    const playlists = await this.spotifyApi.getUserPlaylists(this.usuario.id, { offset, limit });
    return playlists.items.map(SpotifyPlaylistParaPlaylist);
  }


  SpotifyUserParaUsuario(user: any): IUsuario {
    console.log(user);
    return {
      id: user.id,
      nome: user.display_name,
      imagemUrl: user.images
    }
  }

}
