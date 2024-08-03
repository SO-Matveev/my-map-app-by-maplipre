import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";
import { FullscreenControl, Map, NavigationControl, ScaleControl } from 'maplibre-gl';
// @ts-ignore
import MeasureControl from 'maplibre-gl-measures'

@Component({
  selector: "app-map-layout",
  templateUrl: "./map-layout.component.html",
  standalone: true,
  styleUrls: ["./map-layout.component.css"]
})

export class MapLayoutComponent implements AfterViewInit, OnDestroy {
  map!: Map;
  @ViewChild('map', { static: false }) mapContainer!: ElementRef<HTMLElement>;

  constructor(
  ) {}

  ngAfterViewInit(): void {
    this.map = new Map({
      container: this.mapContainer.nativeElement, // container id
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "&copy; OpenStreetMap Contributors",
            maxzoom: 19
          }
        },
        // glyphs: "https://fonts.openmaptiles.org/{fontstack}/{range}.pbf",
        glyphs: "glyphs/{fontstack}/{range}.pbf",
        layers: [
          {
            id: "osm",
            type: "raster",
            source: "osm"
          }
        ],
      },
      center: [27.56, 53.89], // starting position [lng, lat]
      zoom: 10 // starting zoom
    });

    this.map.addControl(new NavigationControl(), "top-left")
    this.map.addControl(new FullscreenControl(), "top-left");
    this.map.addControl(new ScaleControl(), "bottom-left")
    this.map.addControl(new MeasureControl(), 'top-left')
  }

  ngOnDestroy() {
    this.map?.remove();
  }
}
