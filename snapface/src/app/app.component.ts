import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './Models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Photo',
      'Ma super photo',
      new Date(),
      6,
      'https://yt3.googleusercontent.com/ytc/AOPolaQxGi77lBm0y9SlTT8TkqsgqxSNSLdh6Be6OiyL=s900-c-k-c0x00ffffff-no-rj'
    );

    this.myOtherSnap = new FaceSnap(
      'Autre Photo',
      'Mon autre super photo',
      new Date(),
      16,
      'https://i.pinimg.com/originals/10/ba/4a/10ba4afc650ce14862f6447e2730b9a8.png'
    );

    this.myLastSnap = new FaceSnap(
      'Dernière Photo',
      'Ma dernière super photo',
      new Date(),
      26,
      'https://www.nautiljon.com/images/perso/00/22/chouji_akimichi_622.webp'
    );
  }
}
