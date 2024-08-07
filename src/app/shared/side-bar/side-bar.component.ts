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
  ){
    let historyTags: string [] = [];
    if(!localStorage.getItem('history')) return;

    historyTags = JSON.parse(localStorage.getItem('history')!);
    this.serviceGifs.searchTag(historyTags[0]);
  }

  get items() {
    return this.serviceGifs.tagsHistory;
  }

  searchValue(tag: string){
    this.serviceGifs.searchTag(tag);
  }

}
