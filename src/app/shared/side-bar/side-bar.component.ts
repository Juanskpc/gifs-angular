import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.services';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  constructor(
    private serviceGifs: GifsService
  ){}

  get items() {
    return this.serviceGifs.tagsHistory;
  }

}
