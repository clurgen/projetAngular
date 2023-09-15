import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  snapBtn!: string;

  constructor(private faceSnapservice: FaceSnapsService) {}

  ngOnInit() {
    this.snapBtn = 'Oh Snap!';
  }

  onSnap() {
    if (this.snapBtn === 'Oh Snap!') {
      this.faceSnapservice.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapBtn = 'Oops, un Snap';
    } else {
      this.faceSnapservice.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapBtn = 'Oh Snap!';
    }
  }
}
