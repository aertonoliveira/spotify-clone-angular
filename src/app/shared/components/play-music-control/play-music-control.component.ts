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
  playControl: boolean = true;
  pauseControl: boolean = false;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {

    this.playerService.playMysicEvent.subscribe(music => {
      if (music.track.preview_url) {
        this.pauseControl = true;
        this.playControl = false;
      } else {
        this.pauseControl = false;
        this.playControl = true;
      }
    });
  }

  pause() {
    this.playerService.pause();
    this.pauseControl = false;
    this.playControl = true;
  }
  play() {
    this.playerService.play();
    this.pauseControl = true;
    this.playControl = false;
  }
  next() {
    this.playerService.next();
  }
  prev() {
    this.playerService.prev();
  }





}
