import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

export interface ImageSlider{
  imageUrl: string,
  link:string,
  caption:string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit , AfterViewInit , OnDestroy{

  @Input() sliders : ImageSlider[] = [];
  @Input() sliderHeight = '90px';
  @Input() intervalSecond = 2 ;
  selectedIndex = 0;
  intervalId ;
  // static 如果是元素在ngfor ngif 下动态生成，那么static是false
  @ViewChild('imageSlider',{static: true}) imageSlider:ElementRef;
 
  constructor(private rd2:Renderer2) { }

  ngOnInit() {
    console.log('onInit:',this.imageSlider);
  }

  /**
   * 在这里可以安全使用页面上的元素
   */
  ngAfterViewInit(): void {
    this.intervalId =setInterval(()=>{
      this.rd2.setProperty(this.imageSlider.nativeElement,'scrollLeft',
      (this.getIndex(++this.selectedIndex) * this.imageSlider.nativeElement.scrollWidth) / this.sliders.length)
    },this.intervalSecond * 1000);
  }

  /**
   * 防止内存泄漏，要清理interval
   */
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
  }

  /**
   * 处理索引值，使得轮播到最后一张图后返回第一张图
   * @param indx 
   */
  getIndex(indx: number): number {
    return indx >= 0 ? this.selectedIndex % this.sliders.length :
    this.sliders.length - (Math.abs(indx) % this.sliders.length);
  }

  /**
   * 处理轮播图切换，ev是浏览器的响应，不是angular的事件，target是一个DOM节点
   */
  handlerScroll(ev){
    const radio = (ev.target.scrollLeft * this.sliders.length)/ ev.target.scrollWidth;
    this.selectedIndex = Math.round(radio);
  }

}
