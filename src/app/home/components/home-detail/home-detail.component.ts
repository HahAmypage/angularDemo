import { Component, OnInit } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/share/components';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit { 

  selectTabLink;
  constructor(private router:ActivatedRoute) { }

  channels:Channel[] = [
    {
      id:'1',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc10.png',
      title:'雪糕',
      link:'',
    },
    {
      id:'2',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc1.png',
      title:'串烧',
      link:'',
    },
    {
      id:'3',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc11.png',
      title:'泡面',
      link:'',
    },
    {
      id:'4',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc14.png',
      title:'披萨',
      link:'',
    },
    {
      id:'5',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc16.png',
      title:'三文治',
      link:'',
    },
    {
      id:'6',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc4.png',
      title:'甜甜圈',
      link:'',
    },
    {
      id:'7',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc5.png',
      title:'薯条',
      link:'',
    },
    {
      id:'8',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc6.png',
      title:'炸鸡',
      link:'',
    },
    {
      id:'9',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc12.png',
      title:'松饼',
      link:'',
    },
    {
      id:'10',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc17.png',
      title:'香肠',
      link:'',
    },
    {
      id:'11',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc18.png',
      title:'冷饮',
      link:'',
    },
    {
      id:'12',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc19.png',
      title:'寿司',
      link:'',
    },
    {
      id:'13',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc2.png',
      title:'鸡肉卷',
      link:'',
    },
    {
      id:'14',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc20.png',
      title:'热狗',
      link:'',
    },
    {
      id:'15',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc7.png',
      title:'汉堡',
      link:'',
    },
    {
      id:'16',
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7623/cc13.png',
      title:'蛋糕',
      link:'',
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

  ngOnInit() {
    this.router.paramMap.subscribe(param =>{
      console.log('路径参数：',param)
      this.selectTabLink = param.get('tablink');
    })

    this.router.queryParamMap.subscribe(param =>{
      console.log('查询参数：',param);
    })
  }
}
