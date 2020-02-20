import { Component, ViewChild } from '@angular/core';
import { TopMenu, ImageSlider, ImageSliderComponent } from './share/components';

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
export class AppComponent {
  @ViewChild(ImageSliderComponent,{static:true}) imageSlider: ImageSliderComponent;
  scrollTabBackgroundCorlor = "red";
  topMenus:TopMenu[] = [{
    title:'热门',
    link:''
  },
  {
    title:'女装',
    link:''
  },
  {
    title:'鞋包',
    link:''
  },
  {
    title:'男装',
    link:''
  },
  {
    title:'食品',
    link:''
  },
  {
    title:'母婴',
    link:''
  },
  {
    title:'手机',
    link:''
  },
  {
    title:'百货',
    link:''
  },
  {
    title:'内衣',
    link:''
  },
  {
    title:'电器',
    link:''
  },
  {
    title:'家纺',
    link:''
  },
  {
    title:'水果',
    link:''
  },
  {
    title:'家具',
    link:''
  },
  {
    title:'美妆',
    link:''
  },
  {
    title:'家装',
    link:''
  },
  {
    title:'运动',
    link:''
  },
  {
    title:'汽车',
    link:''
  },
  {
    title:'医药',
    link:''
  },
  {
    title:'电脑',
    link:''
  },
  {
    title:'海淘',
    link:''
  }
];

imageSliders:ImageSlider[] = [
  {
    imageUrl:'http://img3.imgtn.bdimg.com/it/u=2841247860,2911841437&fm=26&gp=0.jpg',
    link:'',
    caption:''
  },
  {
    imageUrl:'http://img4.imgtn.bdimg.com/it/u=3324650843,4203827181&fm=26&gp=0.jpg',
    link:'',
    caption:''
  },
  {
    imageUrl:'http://img2.imgtn.bdimg.com/it/u=3313838802,2768404782&fm=26&gp=0.jpg',
    link:'',
    caption:''
  },
  {
    imageUrl:'http://img3.imgtn.bdimg.com/it/u=1362874374,2095103613&fm=26&gp=0.jpg',
    link:'',
    caption:''
  },
  {
    imageUrl:'http://img1.imgtn.bdimg.com/it/u=3896836351,1384250740&fm=26&gp=0.jpg',
    link:'',
    caption:''
  },
  {
    imageUrl:'http://img5.imgtn.bdimg.com/it/u=279375686,3789972975&fm=26&gp=0.jpg',
    link:'',
    caption:''
  }
];

ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  console.log(this.imageSlider);
}

username = '';
handlerSelect(topMenus:TopMenu){
  const colors = ['red','blue','black'];
  const indx = Math.floor(Math.random() * 3);
  this.scrollTabBackgroundCorlor = colors[indx];
  console.log(topMenus);
}
  // add:addFunc = (x,y) => x + y;

  // dict:Dict = {
  //   a:'111',
  //   b:'222'
  // }

  // constructor(){
  //   console.log(this.dict.b);
  // }
}

