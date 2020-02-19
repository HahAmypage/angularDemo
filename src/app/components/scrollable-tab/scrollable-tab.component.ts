import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface TopMenu{
  title:string,
  link:string
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  title = '拼多多';
  selectIndex = -1 ; // 起始值

  @Input() menus:TopMenu[] = [];
  @Output() tabsSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  hanlderSelection(index:number) {
    this.selectIndex = index;
    this.tabsSelected.emit(this.menus[this.selectIndex]);
  }

}
