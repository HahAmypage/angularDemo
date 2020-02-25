import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-grid',
  templateUrl: './vertical-grid.component.html',
  styleUrls: ['./vertical-grid.component.css']
})
export class VerticalGridComponent implements OnInit {

  @Input() itemWidth = '4rem';
  @Input() itemHight = '4rem';
  @Input() gridGap = '5px';
  constructor() { }

  ngOnInit() {
  }

  
  public get templateRows() : string {
    return `minmax(auto-fill, ${this.itemHight})`;
  }


  public get templateColumns() : string {
    return `repeat(auto-fill, minmax(${this.itemWidth}, 1fr))`;
  }
  

}
