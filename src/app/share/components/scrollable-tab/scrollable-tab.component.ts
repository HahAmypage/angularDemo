import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ChangeDetectionStrategy } from '@angular/core';

export interface TopMenu{
  id:number,
  title:string,
  link:string
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

 /**
    * 接口是可选的，也就是说只要有类似 ngOnInit 这样的方法存在
    * 生命周期的钩子函数还是正常执行
    * 但是建议实现接口，好处一个是不会由于误删除某个钩子函数
    * 另一是对组件涉及到哪些生命周期一目了然
    */
export class ScrollableTabComponent implements OnInit , OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{

  title = '拼多多';
  selectIndex = 0 ; // 起始值,默认打开页面时选择“热门”

  @Input() menus:TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = '#ff0';
  @Input() titleColor = '#00f';
  @Input() indicationColor = '#ff0';
  @Output() tabsSelected = new EventEmitter();
  /**
   * 组件构造函数最先调用
   */
  constructor() {
    // console.log("调用组件构造函数");
   }

   /**
    * 在组件 '@Input' 属性发生变化时调用
    * @param changes 索引对象，key 是属性值，value是SimpleChanges
    */
   ngOnChanges(changes: SimpleChanges): void {
     //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
     //Add '${implements OnChanges}' to the class.
    //  console.log("组件属性值变化",changes);
   }

  /**
   * 组件初始化完成，在这个函数中，我们可以放心地使用组件的属性和方法
   */
  ngOnInit() {
    // console.log("组件初始化");
  }

  /**
   * 脏值检查
   */
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // console.log("脏值检查");
  }

  /**
   * 组件内容初试化
   */
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // console.log("组件内容初试化");
  }

  /**
   * 组件内容脏值检查
   */
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    // console.log("组件内容脏值检查");
  }

  /**
   * 组件视图初始化
   */
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log("组件视图初始化");
  }

  /**
   * 组件视图脏值检查
   */
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // console.log("组件视图脏值检查");
  }

  /**
   * 组件销毁
   * (在app.component.html的顶部自定义标签中添加 *ngIf="scrollTabBackgroundCorlor === 'red'" 可以验证销毁)
   */
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // console.log("组件销毁");
  }

  hanlderSelection(index:number) {
    this.selectIndex = index;
    this.tabsSelected.emit(this.menus[this.selectIndex]);
  }

}
