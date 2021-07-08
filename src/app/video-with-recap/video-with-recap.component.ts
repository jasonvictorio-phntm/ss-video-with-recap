import { Component } from '@angular/core';

@Component({
  selector: 'app-video-with-recap',
  templateUrl: './video-with-recap.component.html',
  styleUrls: ['./video-with-recap.component.scss'],
})
export class VideoWithRecapComponent {
  isRecapVisible: boolean = false;

  toggleRecap() {
    this.isRecapVisible = !this.isRecapVisible;
  }

  hideRecap() {
    this.isRecapVisible = false;
  }
}
