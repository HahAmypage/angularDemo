import { Component, OnInit } from '@angular/core';
import { TopMenu } from 'src/app/share/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  scrollTabBackgroundCorlor = "red";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  topMenus:TopMenu[] = [{
    id:1,
    title:'热门',
    link:'hot'
  },
  {
    id:2,
    title:'女装',
    link:'women'
  },
  {
    id:3,
    title:'鞋包',
    link:'bag'
  },
  {
    id:4,
    title:'男装',
    link:'man'
  },
  {
    id:5,
    title:'食品',
    link:'food'
  },
  {
    id:6,
    title:'母婴',
    link:'baby'
  },
  {
    id:7,
    title:'手机',
    link:'phone'
  },
  {
    id:8,
    title:'百货',
    link:'store'
  },
  {
    id:9,
    title:'内衣',
    link:'underwear'
  },
  {
    id:10,
    title:'电器',
    link:'device'
  },
  {
    id:11,
    title:'家纺',
    link:'textiles'
  },
  {
    id:12,
    title:'水果',
    link:'fruit'
  },
  {
    id:13,
    title:'家具',
    link:'furniture'
  },
  {
    id:14,
    title:'美妆',
    link:'makeup'
  },
  {
    id:15,
    title:'家装',
    link:'homeimprovement'
  },
  {
    id:16,
    title:'运动',
    link:'sport'
  },
  {
    id:17,
    title:'汽车',
    link:'cars'
  },
  {
    id:18,
    title:'医药',
    link:'medicine'
  },
  {
    id:19,
    title:'电脑',
    link:'computer'
  },
  {
    id:20,
    title:'海淘',
    link:'haitao'
  }
];

  handlerSelectTab(topMenu:TopMenu){
    this.router.navigate(['home',topMenu.link]);
  }

  // handlerSelect(topMenus:TopMenu){
  //   const colors = ['red','blue','black'];
  //   const indx = Math.floor(Math.random() * 3);
  //   this.scrollTabBackgroundCorlor = colors[indx];
  //   console.log(topMenus);
  // }
}
