import { Component, OnInit, Injector, inject, Inject } from '@angular/core';
import { TopMenu } from 'src/app/share/components';
import { Router } from '@angular/router';
import { HomeService, token } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  scrollTabBackgroundCorlor = "red";
  topMenus:TopMenu[] = [];
  constructor(
    private router: Router,
    private service: HomeService,
    @Inject(token) private baseUrl: string) { }

  ngOnInit() {
    this.topMenus = this.service.getTopMenu();
    console.log(this.baseUrl);
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
