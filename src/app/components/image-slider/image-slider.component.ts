import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';

export interface ImageSlider{
  imageUrl: string,
  link:string,
  caption:string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  @Input() sliders : ImageSlider[] = [];
  // static 如果是元素在ngfor ngif 下动态生成，那么static是false
  @ViewChild('imageSlider',{static: true}) imageSlider:ElementRef;
  @ViewChildren('img') imgs : QueryList<ElementRef>;
  constructor(private rd2:Renderer2) { }

  ngOnInit() {
    console.log('onInit:',this.imageSlider);
  }

  /**
   * 在这里可以安全使用页面上的元素
   */
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit',this.imgs);
    this.imgs.forEach(item =>{
      this.rd2.setStyle(item.nativeElement , 'height' ,'100px');
    })
  }

}
