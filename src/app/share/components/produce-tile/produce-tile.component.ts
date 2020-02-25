import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../domain';

@Component({
  selector: 'app-produce-tile',
  templateUrl: './produce-tile.component.html',
  styleUrls: ['./produce-tile.component.css']
})
export class ProduceTileComponent implements OnInit {

  @Input() product: Product
  constructor() { }

  ngOnInit() {
  }

}
