import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  snap!: boolean;
  snapBtn!: string;

  ngOnInit() {
    this.snap = false;
    this.snapBtn = 'Oh Snap!';
  }

  onSnap() {
    if (this.snap === false) {
      this.faceSnap.snaps++;
      this.snap = true;
      this.snapBtn = 'Oops, un Snap';
    } else {
      this.faceSnap.snaps--;
      this.snap = false;
      this.snapBtn = 'Oh Snap!';
    }
  }
}
