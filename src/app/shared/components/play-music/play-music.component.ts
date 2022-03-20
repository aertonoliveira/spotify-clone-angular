import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-play-music',
  templateUrl: './play-music.component.html',
  styleUrls: ['./play-music.component.scss']
})
export class PlayMusicComponent implements OnInit {
  music: any;
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.playMysicEvent.subscribe(music => {
      console.log(music);
      this.music = music;
    });
  }

  returnArtists(value: any) {
    return value.map((artist: any) => artist.name).join(', ');
  }
}
