import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TabItem } from './share/domain';
import { Route, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { DialogService } from './dialog';
// import { TopMenu, ImageSlider, ImageSliderComponent, Channel } from './share/components';

// 使用interface定义属性
//属性?:类型  代表可选属性
//readonly 属性:类型  代表只读属性，赋值一次后不能重复赋值


// interface定义方法
// interface addFunc{
//   // 表示方法有两个入参，都是number类型，冒号后面是返回值类型（number）
//   (x:number,y:number):number;
// }


// interface定义索引类型
// interface Dict{
//   [key: string]:string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // @ViewChild(ImageSliderComponent,{static:true}) imageSlider: ImageSliderComponent;
  
selectedItemIndex$: Observable<number>;

constructor(private router: Router, private dialogSerivce: DialogService){
  
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  // 先过滤导航后事件(这是一个路由事件)，再事件中取到url并拆分成数组，取到数组的元素，再进一步处理就是新建一个函数，
  // 根据路由名称返回一个索引
  // this.router.events是一个流
  this.selectedItemIndex$ = this.router.events.pipe(
    filter(ev => ev instanceof NavigationEnd),
    map((ev:NavigationEnd) => {
      const array  = ev.url.split("/");
      return array.length > 1 ? array[1]:'home'
    }),
    map(path => this.getTabSelectIndex(path))
  )
}

// 首页放最后，反正其他不符合都导航到首页
getTabSelectIndex(tab:string){
  return tab === 'recommend'? 1:
  tab === 'category'? 2:
  tab === 'chat'? 3:
  tab === 'my'? 4:
  0
}
handlersSelectedTab(tab: TabItem){
  this.router.navigate([tab.link]);
}

removeDialog(){
  this.dialogSerivce.close();
}

ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  // console.log(this.imageSlider);
}

// username = '';

  // add:addFunc = (x,y) => x + y;

  // dict:Dict = {
  //   a:'111',
  //   b:'222'
  // }

  // constructor(){
  //   console.log(this.dict.b);
  // }
}

