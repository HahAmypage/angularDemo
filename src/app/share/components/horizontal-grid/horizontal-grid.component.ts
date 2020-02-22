import { Component, OnInit, Output, EventEmitter, Input, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Emoji, Comfiguration } from '../../decorators';

export interface Channel{
  id: string,
  icon: string,
  title: string,
  link: string,
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalGridComponent implements OnInit {

  

  // usename = '';
  // private _username = '';
  // @Emoji() result  = 'haha';
  // @Output() usernameChange = new EventEmitter();

  @Input() cols = 8;
  @Input() displayCols = 5;
  sliderMargin = '0';
  constructor() { }

  ngOnInit() {
  }

  
  public get scrollable() : boolean {
    return this.cols > this.displayCols;
  }
  
  
  public get templateRows() : string {
    return `minmax(auto,max-content)`;
  }
  
  
  public get templateColumns() : string {
    return `repeat(${this.cols},calc((100vw - ${this.displayCols * 0.4}rem) / ${this.displayCols}))`;
  }
  
  handlerScoller(ev){
    this.sliderMargin = `0 ${100 * ev.target.scrollLeft / ev.target.scrollWidth }%`;
  }



  // @Input()
  // public get username() : string {
  //   return this._username;
  // }
  

  // public set username(value : string) {
  //   this._username = value;
  //   this.usernameChange.emit(value); 
  // }

  // @Comfiguration('确认要操作吗?')
  // handlerCick(){
  //   console.log("click me!!!!")
  // }
  

  // @HostListener('click',['$event.target'])
  // handlerCilck(ev){
  //   console.log(ev);
  // }
}
