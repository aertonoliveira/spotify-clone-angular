import { Component, OnInit } from '@angular/core';

import { PlaylistsService } from 'src/app/shared/services/playlists.service';
import { SpotifyService } from 'src/app/shared/services/spotify.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit {
  playlists: any[] = [];
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getPlayList();
  }

  async getPlayList() {
    this.playlists = await this.spotifyService.buscarPlaylistUsuario();
    console.log(this.playlists);
  }
  buscarPlayListId(id: string) {
    console.log(id)
    // this.spotifyService.buscarPlaylistId(id);
  }
}
