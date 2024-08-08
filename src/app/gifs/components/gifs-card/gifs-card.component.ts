import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.services';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gif!: Gif;

  constructor(
    private serviceGifs: GifsService
  ){
    
  }

  ngOnInit(): void {
    if( !this.gif ) throw new Error('Se requiere el gif');
  }
}
