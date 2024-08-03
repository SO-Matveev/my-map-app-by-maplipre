import { Component } from "@angular/core";
import { MapLayoutComponent } from "../../components/map-layout/map-layout.component";


@Component({
  selector: 'map-page',
  standalone: true,
  templateUrl: 'map-page.component.html',
  imports: [MapLayoutComponent],
  styleUrl: 'map-page.component.css'
})

export class MapPage {

  public constructor() {
  }

}
