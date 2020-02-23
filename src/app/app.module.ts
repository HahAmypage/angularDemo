import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule, ParamInterceptor, NotificationInterceptor } from './home';
import { CategoryModule } from './category';
// import { ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent } from './components';
// import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';
// import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import localeZh from '@angular/common/locales/zh-Hans';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChatModule } from './chat';
import { MyModule } from './my';
import { RecommendModule } from './recommend';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ShareModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CategoryModule,
    ChatModule,
    MyModule,
    RecommendModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(localeZh,'zh');
  }
 }
