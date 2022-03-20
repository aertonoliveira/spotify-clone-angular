import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playlist: any;
  private audio = new Audio();
  playMysicEvent: EventEmitter<any> = new EventEmitter<any>();;
  playMysic: any;

  constructor() { }

  setPlaylist(playlist: any) {
    this.playlist = playlist;
  }

  setPlayMysic(playMysic: any) {
    this.playlist.filter((music: any) => {
      if (music.track.id === playMysic) {
        this.playMusic(music)
      }
    });
  }

  playMusic(music: any) {
    this.playMysic = music;
    this.audio.src = music.track.preview_url;
    this.audio.load();
    this.audio.play();

    this.playMysicEvent.emit(this.playMysic);

  }

  play() {
    this.audio.play();
  }
  pause() {
    this.audio.pause();
  }
  next() {
    let idx = this.playlist.indexOf(this.playMysic);
    if (idx >= 0 && idx <= this.playlist.length - 2) {
      this.playMusic(this.playlist[idx + 1]);
    }
  }
  prev() {
    let idx = this.playlist.indexOf(this.playMysic);
    if (idx >= 1) {
      this.playMusic(this.playlist[idx - 1]);
    }
  }


}
