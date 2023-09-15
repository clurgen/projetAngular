import { Injectable } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    new FaceSnap(
      1,
      'Photo',
      'Ma super photo',
      new Date(),
      60,
      'https://yt3.googleusercontent.com/ytc/AOPolaQxGi77lBm0y9SlTT8TkqsgqxSNSLdh6Be6OiyL=s900-c-k-c0x00ffffff-no-rj',
      'Paris'
    ),
    new FaceSnap(
      2,
      'Autre Photo',
      'Mon autre super photo',
      new Date(),
      160,
      'https://i.pinimg.com/originals/10/ba/4a/10ba4afc650ce14862f6447e2730b9a8.png'
    ),
    new FaceSnap(
      3,
      'Dernière Photo',
      'Ma dernière super photo',
      new Date(),
      240,
      'https://www.nautiljon.com/images/perso/00/22/chouji_akimichi_622.webp',
      'Konoha'
    ),
  ];
  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
