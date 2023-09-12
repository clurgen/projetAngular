import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './Models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      new FaceSnap(
        'Photo',
        'Ma super photo',
        new Date(),
        60,
        'https://yt3.googleusercontent.com/ytc/AOPolaQxGi77lBm0y9SlTT8TkqsgqxSNSLdh6Be6OiyL=s900-c-k-c0x00ffffff-no-rj',
        'Paris'
      ),
      new FaceSnap(
        'Autre Photo',
        'Mon autre super photo',
        new Date(),
        160,
        'https://i.pinimg.com/originals/10/ba/4a/10ba4afc650ce14862f6447e2730b9a8.png'
      ),
      new FaceSnap(
        'Dernière Photo',
        'Ma dernière super photo',
        new Date(),
        240,
        'https://www.nautiljon.com/images/perso/00/22/chouji_akimichi_622.webp',
        'Konoha'
      ),
    ];
  }
}
