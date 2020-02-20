import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
// import { ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent } from './components';
// import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';
// import { ImageSliderComponent } from './components/image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
