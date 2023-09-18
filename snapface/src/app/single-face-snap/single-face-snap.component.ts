import { Component, Input } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  snapBtn!: string;

  constructor(private faceSnapservice: FaceSnapsService,
    private route: ActivatedRoute,
    private router: Router) {
      
    }

  ngOnInit() {
    this.snapBtn = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params["id"];
    this.faceSnap = this.faceSnapservice.getFaceSnapById(faceSnapId);

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
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
