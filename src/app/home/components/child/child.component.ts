import { Component, OnInit, NgZone, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { formatDate } from '@angular/common';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  _title;
  _time;
  
  public get title() : string {
    console.log("脏值检测");
    return this._title;
  }
  
  @ViewChild('timeRef',{static:true}) timeRef: ElementRef;
  @ViewChild('inputRef',{static: true}) inputRef: ElementRef;
  constructor(private ngzone: NgZone,private rd2: Renderer2) { 

  }

  ngOnInit() {
    this._title= 'hello';
    fromEvent(this.inputRef.nativeElement,'input').subscribe((ev: any)=>{
      console.log(ev.target.value);
    })
    console.log("afte");
  }

  
  public get time() : number {
    return this._time = this._time ;
  }
  

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.ngzone.runOutsideAngular(()=>{
      //异步操作改变值（因为脏值检测是同步的，这里直接改变还是会触发检测，异步改变就不触发）
      setInterval(()=>{
        // this._title = 'hihhh';
        this.rd2.setProperty(this.timeRef.nativeElement, 'innerText',
        //formatDate和html中用的管道是一样的，可以查官方文档，看每个管道对应什么函数
         formatDate(Date.now(),'HH:mm:ss SSS','zh-Hans')) 
      },100);
    });
  }

  handlerClick(){

  }
}
