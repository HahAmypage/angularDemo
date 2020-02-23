import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/share/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { filter, map } from 'rxjs/operators';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit { 

  // selectTabLink$: Observable<string> ;
  selectTabLink: string ;

  // channels$: Observable<Channel[]>;
  channels: Channel[] = [];

  // imageSliders$: Observable<ImageSlider[]>;
  imageSliders: ImageSlider[] = [];

  sub: Subscription

  constructor(private router:ActivatedRoute , private service: HomeService, private change: ChangeDetectorRef) { }


  ngOnInit() {

    this.service.getChannel().subscribe(channel =>{
      console.log(channel);
      this.channels = channel;
      this.change.markForCheck();
    });
    // 使用流之后改为(这种方式不仅简化代码，而且不用像订阅那样需要做清理的处理--订阅不清理可能会内存泄漏)
    // console.log(this.service.getChannel());
    // this.channels$ = this.service.getChannel();

    this.service.getImageSlider().subscribe(banner => {
      console.log(banner);
      this.imageSliders = banner;
      this.change.markForCheck();
    });

    // console.log(this.service.getImageSlider());
    // this.imageSliders$ = this.service.getImageSlider();

    
    // this.selectTabLink$ = this.router.paramMap.pipe(
    //   filter(params => params.has('tabLink')),
    //   map(params => params.get('tabLink'))
    // );

    this.router.paramMap.subscribe(param =>{
      this.selectTabLink = param.get('tablink');
      this.change.markForCheck();
    });

    this.sub = this.router.queryParamMap.subscribe(param =>{
      console.log('查询参数：',param);
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
}
