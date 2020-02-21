import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../share/share.module';
import { HomeContainerComponent } from './components/home-container';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { HomeGrandComponent } from './components/home-grand/home-grand.component';
import { HomeAuxComponent } from './components/home-aux/home-aux.component';
import { HomeService, token } from './services';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent
  ],
  providers:[
    {
      provide:token,
      useValue: 'www.google.com'
    }
  ],
  imports: [
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
