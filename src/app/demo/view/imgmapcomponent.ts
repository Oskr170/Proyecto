import { Component, ViewChild } from '@angular/core'
import { ImgMapComponent } from 'ng2-img-map';

@Component({
  template: `
    <div class="container-fluid">
      <div class="col-sm-8">
        <img-map
          #imgMap
          src="http://placekitten.com/g/800/600"
          markerRadius="30"
          [markers]="markers"
          (mark)="onMark($event)"
          (change)="onChange($event)"
        ></img-map>
      </div>
      <div class="col-sm-4">
        <h2>Markers</h2>
        <ul class="list-unstyled">
          <li *ngFor="let marker of markers; let i = index">
            <span
              [ngClass]="{'text-primary': imgMap.markerActive === i}"
              (click)="selectMarker(i)"
            >
              {{ marker[0] }} x {{ marker[1] }}
            </span>
            <button
              class="btn btn-danger btn-xs"
              (click)="removeMarker(i)"
            >
              <span class="glyphicon glyphicon-trash"></span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class Imgmapcomponent {
  @ViewChild('imgMap')
  imgMap: ImgMapComponent;
  markers: number[][] = [[25, 25], [50, 50], [75, 75]];
  onMark(marker: number[]) {
    console.log('Markers', this.markers);
  }
  onChange(marker: number[]) {
    console.log('Marker', marker);
  }
  selectMarker(index: number) {
    this.imgMap.markerActive = index;
    this.imgMap.draw();
  }
  removeMarker(index: number) {
    this.markers.splice(index, 1);
    if (index === this.imgMap.markerActive) {
      this.imgMap.markerActive = null;
    } else if (index < this.imgMap.markerActive) {
      this.imgMap.markerActive--;
    }
    this.imgMap.draw();
  }
};
