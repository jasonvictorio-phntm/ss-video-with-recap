import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWithRecapComponent } from './video-with-recap.component';

describe('VideoWithRecapComponent', () => {
  let component: VideoWithRecapComponent;
  let fixture: ComponentFixture<VideoWithRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoWithRecapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWithRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
