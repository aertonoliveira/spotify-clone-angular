import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from 'src/app/shared/services/playlists.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shows: any;
  constructor(private playListService: PlaylistsService) { }

  ngOnInit(): void {
    this.getShows();
    this.getAlbums();
  }

  getShows() {
    this.playListService.getShows().subscribe(
      (data) => {
        this.shows = data.items;
        console.log(data);
      });
  }
  getAlbums() {
    this.playListService.getAlbums().subscribe(
      (data) => {
        console.log(data);
      });
  }

}
