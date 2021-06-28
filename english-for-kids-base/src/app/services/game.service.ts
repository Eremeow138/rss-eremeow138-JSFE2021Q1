import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private readonly audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
  }

  play(src: string): void {
    this.audio.src = src;
    this.audio.load();
    this.audio.play();
  }
}
