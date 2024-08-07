import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.services';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text" 
    class="form-control" 
    placeholder="Buscar gifs..."
    (keyup.enter)="buscarTag()"
    #txtTag>
  `
})
export class SearchBoxComponent {

  @ViewChild('txtTag')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(
    private serviceGifs: GifsService
  ){}

  buscarTag() {
    const nuevoTag = this.tagInput.nativeElement.value;

    this.serviceGifs.searchTag(nuevoTag);

    this.tagInput.nativeElement.value = '';
  }
}
