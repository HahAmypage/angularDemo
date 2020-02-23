import { Injectable } from '@angular/core';
import { TopMenu, ImageSlider, Channel } from 'src/app/share/components';

import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient){

  }
  getTopMenu(){
    return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`);
  }

  getChannel(){
    return this.http.get<Channel[]>(`${environment.baseUrl}/channels`);
  }

  getImageSlider(){
    return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`);
  }
}

    // topMenus:TopMenu[] = [{
    //     id:1,
    //     title:'热门',
    //     link:'hot'
    //   },
    //   {
    //     id:2,
    //     title:'女装',
    //     link:'women'
    //   },
    //   {
    //     id:3,
    //     title:'鞋包',
    //     link:'bag'
    //   },
    //   {
    //     id:4,
    //     title:'男装',
    //     link:'man'
    //   },
    //   {
    //     id:5,
    //     title:'食品',
    //     link:'food'
    //   },
    //   {
    //     id:6,
    //     title:'母婴',
    //     link:'baby'
    //   },
    //   {
    //     id:7,
    //     title:'手机',
    //     link:'phone'
    //   },
    //   {
    //     id:8,
    //     title:'百货',
    //     link:'store'
    //   },
    //   {
    //     id:9,
    //     title:'内衣',
    //     link:'underwear'
    //   },
    //   {
    //     id:10,
    //     title:'电器',
    //     link:'device'
    //   },
    //   {
    //     id:11,
    //     title:'家纺',
    //     link:'textiles'
    //   },
    //   {
    //     id:12,
    //     title:'水果',
    //     link:'fruit'
    //   },
    //   {
    //     id:13,
    //     title:'家具',
    //     link:'furniture'
    //   },
    //   {
    //     id:14,
    //     title:'美妆',
    //     link:'makeup'
    //   },
    //   {
    //     id:15,
    //     title:'家装',
    //     link:'homeimprovement'
    //   },
    //   {
    //     id:16,
    //     title:'运动',
    //     link:'sport'
    //   },
    //   {
    //     id:17,
    //     title:'汽车',
    //     link:'cars'
    //   },
    //   {
    //     id:18,
    //     title:'医药',
    //     link:'medicine'
    //   },
    //   {
    //     id:19,
    //     title:'电脑',
    //     link:'computer'
    //   },
    //   {
    //     id:20,
    //     title:'海淘',
    //     link:'haitao'
    //   }
    // ];

    // channels:Channel[] = [
    //     {
    //       id:'1',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc10.png',
    //       title:'雪糕',
    //       link:'',
    //     },
    //     {
    //       id:'2',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc1.png',
    //       title:'串烧',
    //       link:'',
    //     },
    //     {
    //       id:'3',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc11.png',
    //       title:'泡面',
    //       link:'',
    //     },
    //     {
    //       id:'4',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc14.png',
    //       title:'披萨',
    //       link:'',
    //     },
    //     {
    //       id:'5',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc16.png',
    //       title:'三文治',
    //       link:'',
    //     },
    //     {
    //       id:'6',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc4.png',
    //       title:'甜甜圈',
    //       link:'',
    //     },
    //     {
    //       id:'7',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc5.png',
    //       title:'薯条',
    //       link:'',
    //     },
    //     {
    //       id:'8',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc6.png',
    //       title:'炸鸡',
    //       link:'',
    //     },
    //     {
    //       id:'9',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc12.png',
    //       title:'松饼',
    //       link:'',
    //     },
    //     {
    //       id:'10',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc17.png',
    //       title:'香肠',
    //       link:'',
    //     },
    //     {
    //       id:'11',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc18.png',
    //       title:'冷饮',
    //       link:'',
    //     },
    //     {
    //       id:'12',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc19.png',
    //       title:'寿司',
    //       link:'',
    //     },
    //     {
    //       id:'13',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc2.png',
    //       title:'鸡肉卷',
    //       link:'',
    //     },
    //     {
    //       id:'14',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc20.png',
    //       title:'热狗',
    //       link:'',
    //     },
    //     {
    //       id:'15',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc7.png',
    //       title:'汉堡',
    //       link:'',
    //     },
    //     {
    //       id:'16',
    //       icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc13.png',
    //       title:'蛋糕',
    //       link:'',
    //     }
    //   ];
    
    //   imageSliders:ImageSlider[] = [
    //     {
    //       imageUrl:'http://img3.imgtn.bdimg.com/it/u=2841247860,2911841437&fm=26&gp=0.jpg',
    //       link:'',
    //       caption:''
    //     },
    //     {
    //       imageUrl:'http://img4.imgtn.bdimg.com/it/u=3324650843,4203827181&fm=26&gp=0.jpg',
    //       link:'',
    //       caption:''
    //     },
    //     {
    //       imageUrl:'http://img2.imgtn.bdimg.com/it/u=3313838802,2768404782&fm=26&gp=0.jpg',
    //       link:'',
    //       caption:''
    //     },
    //     {
    //       imageUrl:'http://img3.imgtn.bdimg.com/it/u=1362874374,2095103613&fm=26&gp=0.jpg',
    //       link:'',
    //       caption:''
    //     },
    //     {
    //       imageUrl:'http://img1.imgtn.bdimg.com/it/u=3896836351,1384250740&fm=26&gp=0.jpg',
    //       link:'',
    //       caption:''
    //     },
    //     {
    //       imageUrl:'http://img5.imgtn.bdimg.com/it/u=279375686,3789972975&fm=26&gp=0.jpg',
    //       link:'',
    //       caption:''
    //     }
    //   ];

