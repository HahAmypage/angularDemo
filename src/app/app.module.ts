import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home';
// import { ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent } from './components';
// import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';
// import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import localeZh from '@angular/common/locales/zh-Hans';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ShareModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(localeZh,'zh');
  }
 }
