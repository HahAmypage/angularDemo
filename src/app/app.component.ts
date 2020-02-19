import { Component } from '@angular/core';
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
  
  // add:addFunc = (x,y) => x + y;

  // dict:Dict = {
  //   a:'111',
  //   b:'222'
  // }

  // constructor(){
  //   console.log(this.dict.b);
  // }
}

