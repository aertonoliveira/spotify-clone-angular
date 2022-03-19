import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-play-music-control',
  templateUrl: './play-music-control.component.html',
  styleUrls: ['./play-music-control.component.scss']
})
export class PlayMusicControlComponent implements OnInit {
  playlist: any;
  playMysic: any;
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.playMysicEvent.subscribe(music => {
      this.playMysic = music;
    });
  }

  next() {
    this.playerService.next();
  }






}
