import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playlist: any;
  playMysicEvent: EventEmitter<any> = new EventEmitter<any>();;
  playMysic: any;

  constructor() { }

  setPlaylist(playlist: any) {
    this.playlist = playlist;
  }

  setPlayMysic(playMysic: any) {
    this.playlist.filter((music: any) => {
      if (music.track.id === playMysic) {
        this.playMysic = music;
        this.playMysicEvent.emit(this.playMysic.track.preview_url);
      }
    });
  }

  play() {
    return this.playMysic;
  }

  next() {
    this.playMysic.next();
  }

  // prev() {
  //   this.playMysic.prev();
  // }

  // setVolume(volume: number) {
  //   this.playMysic.setVolume(volume);
  // }

  // setTime(time: number) {
  //   this.playMysic.setTime(time);
  // }

}
