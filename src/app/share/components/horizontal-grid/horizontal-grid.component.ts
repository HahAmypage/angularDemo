import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Emoji, Comfiguration } from '../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  // usename = '';
  private _username = '';
  @Emoji() result  = 'haha';
  @Output() usernameChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  @Input()
  public get username() : string {
    return this._username;
  }
  

  public set username(value : string) {
    this._username = value;
    this.usernameChange.emit(value); 
  }

  @Comfiguration('确认要操作吗?')
  handlerCick(){
    console.log("click me!!!!")
  }
  
}
