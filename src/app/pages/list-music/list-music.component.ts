import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistsService } from 'src/app/shared/services/playlists.service';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.scss']
})
export class ListMusicComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    private playListService: PlaylistsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.getPlayListById(params['id']);

    });
  }

  getPlayListById(id: string) {
    this.playListService.getPlayListById(id).subscribe((data) => {
      console.log(data);
    });
  }

}
