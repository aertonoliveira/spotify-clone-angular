import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-playlist-muisc',
  templateUrl: './playlist-muisc.component.html',
  styleUrls: ['./playlist-muisc.component.scss']
})
export class PlaylistMuiscComponent implements OnInit {
  @Input() music: any;
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

  returnArtists(value: any) {
    return value.map((artist: any) => artist.name).join(', ');
  }
  returnTimeMusic(music: any) {
    const seconds = 1000;
    const millisecond = 60000

    var segundos = (music / seconds) % 60;
    var minutes = (music / millisecond) % 60;

    let s = segundos.toString().split('.');
    let m = minutes.toString().split('.');
    return m[0] + ':' + s[0]
  }

  playMysic(value: any) {
    this.playerService.setPlaylist(this.music);
    this.playerService.setPlayMysic(value);
  }

}
