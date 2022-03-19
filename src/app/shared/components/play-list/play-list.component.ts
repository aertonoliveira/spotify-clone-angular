import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlaylistsService } from 'src/app/shared/services/playlists.service';
import { SpotifyService } from 'src/app/shared/services/spotify.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit {
  playlists: any[] = [];
  constructor(private spotifyService: SpotifyService, private playListService: PlaylistsService, private router: Router,) { }

  ngOnInit(): void {
    this.getPlayList();
    this.getTeste();
  }

  async getPlayList() {
    this.playlists = await this.spotifyService.buscarPlaylistUsuario();
    console.log(this.playlists);
  }
  buscarPlayListId(id: string) {
    this.router.navigate(['/app/playlist', id]);
  }

  getTeste() {
    this.playListService.getPlaylists().subscribe(
      (data) => {
        console.log(data);
      });
  }

}
