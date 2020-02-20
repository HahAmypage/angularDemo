import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {

  channels:Channel[] = [
    {
      id:'1',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc10.png',
      title:'雪糕',
      link:'',
    },
    {
      id:'2',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc1.png',
      title:'串烧',
      link:'',
    },
    {
      id:'3',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc11.png',
      title:'泡面',
      link:'',
    },
    {
      id:'4',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc14.png',
      title:'披萨',
      link:'',
    },
    {
      id:'5',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc16.png',
      title:'三文治',
      link:'',
    },
    {
      id:'6',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc4.png',
      title:'甜甜圈',
      link:'',
    },
    {
      id:'7',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc5.png',
      title:'薯条',
      link:'',
    },
    {
      id:'8',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc6.png',
      title:'炸鸡',
      link:'',
    }
  ];

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
