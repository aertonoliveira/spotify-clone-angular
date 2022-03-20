import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistsService } from 'src/app/shared/services/playlists.service';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.scss']
})
export class ListMusicComponent implements OnInit {
  playlist: any;
  param: string;
  constructor(
    public route: ActivatedRoute,
    private playListService: PlaylistsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.param = params['params']
      if (params['params'] === 'playlist') {
        this.getPlayListById(params['id']);
      } else if (params['params'] === 'album') {
        this.getAlbumsById(params['id']);
      }


    });
  }

  getPlayListById(id: string) {
    this.playListService.getPlayListById(id).subscribe((data) => {
      this.playlist = data;
    });
  }
  getAlbumsById(id: string) {
    this.playListService.getAlbumsById(id).subscribe((data) => {
      this.playlist = data;
    });
  }

}
