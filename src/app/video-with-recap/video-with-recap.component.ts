import { Component } from '@angular/core';

@Component({
  selector: 'app-video-with-recap',
  templateUrl: './video-with-recap.component.html',
  styleUrls: ['./video-with-recap.component.scss'],
})
export class VideoWithRecapComponent {
  isRecapVisible: boolean = false;
  style: string = 'style-1';
  styles: string[] = ['style-1', 'style-2', 'style-3', 'style-4'];

  toggleRecap() {
    this.isRecapVisible = !this.isRecapVisible;
  }

  hideRecap() {
    this.isRecapVisible = false;
  }

  changeStyle(style: string) {
    this.isRecapVisible = false;
    this.style = style;
  }
}
