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
  constructor(private spotifyService: SpotifyService, private playListService: PlaylistsService) { }

  ngOnInit(): void {
    this.getPlayList();
    this.getTeste();
  }

  async getPlayList() {
    this.playlists = await this.spotifyService.buscarPlaylistUsuario();
    console.log(this.playlists);
  }
  buscarPlayListId(id: number) {
    // this.playListService.getPlaylistsById(id).subscribe(res => {
    //   console.log(res);
    // }, error => {
    //   console.log(error);
    // })
  }

  getTeste() {
    this.playListService.getPlaylists().subscribe(
      (data) => {
        console.log(data);
      });
  }

}
