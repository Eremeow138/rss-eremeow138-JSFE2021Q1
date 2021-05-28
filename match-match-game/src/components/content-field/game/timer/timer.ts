import './timer.scss';
import { BaseComponent } from '../../../base-component';

export class Timer extends BaseComponent {
  private timerShow: BaseComponent;

  private timer: NodeJS.Timeout | null = null;

  private timeSec = 0;

  constructor() {
    super('div', ['timer']);
    this.timerShow = new BaseComponent('div', ['timer__show']);
  }

  tikTack(
    startTimeInSec: number,
    incriment: number,
    intervalInMS: number,
    callback?: () => void,
  ): void {
    this.timeSec = startTimeInSec;
    this.timer = setInterval(() => {
      if (callback) {
        callback();
      }
      let min = String(Math.trunc(this.timeSec / 60));
      let sec = String(Math.trunc(this.timeSec % 60));
      if (min.length === 1) {
        min = `0${min}`;
      }
      if (sec.length === 1) {
        sec = `0${sec}`;
      }
      this.timerShow.element.innerHTML = `${min}:${sec}`;
      this.timeSec += incriment;
    }, intervalInMS);
  }

  startTimer(timeSecond: number): Promise<void> {
    return new Promise(resolve => {
      this.tikTack(timeSecond, -1, 1000, () => {
        if (this.timeSec <= 0) {
          this.stopTimer();
          resolve();
        }
      });
    });
  }

  startStopwatch(): void {
    this.tikTack(0, 1, 1000);
  }

  stopTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  getTimeInSec(): number {
    return this.timeSec;
  }

  render(): HTMLElement {
    this.element.appendChild(this.timerShow.render());
    return this.element;
  }
}
