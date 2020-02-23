import { Component, OnInit, Injector, inject, Inject, OnDestroy } from '@angular/core';
import { TopMenu } from 'src/app/share/components';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService, token } from '../../services';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit,OnDestroy {

  scrollTabBackgroundCorlor = "whited";
  // topMenus$: Observable<TopMenu[]>;
  topMenus: TopMenu[] = [];
  sub: Subscription;
  selectTabLink$: Observable<string>;
  constructor(
    private router: Router,
    private service: HomeService,
    @Inject(token) private baseUrl: string,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.selectTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(param => param.has('tablink')),
      map(parma => parma.get('tablink'))
    )

    console.log(this.service.getTopMenu());
    // 用订阅方式可以获取自己后台的数据并显示
    this.sub = this.service.getTopMenu().subscribe(res =>{
      console.log(res);
      this.topMenus = res;
    });
    // console.log(this.baseUrl);

    // 用流的方式获取数据,暂时显示不出来
    //（浏览器控制台可以看到this.service.getTopMenu() 这里是有拿到数据就是页面显示不出来）
    // this.topMenus$ = this.service.getTopMenu();
  }

  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
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
