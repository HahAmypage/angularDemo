import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/share/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit { 

  selectTabLink;

  channels:Channel[] = [];

  imageSliders:ImageSlider[] = [];

  constructor(private router:ActivatedRoute , private service: HomeService, private change: ChangeDetectorRef) { }


  ngOnInit() {

    this.channels = this.service.getChannel();

    this.imageSliders = this.service.getImageSlider();

    this.router.paramMap.subscribe(param =>{
      console.log('路径参数：',param)
      this.selectTabLink = param.get('tablink');
      this.change.markForCheck();
    })

    this.router.queryParamMap.subscribe(param =>{
      console.log('查询参数：',param);
    })
  }
}
