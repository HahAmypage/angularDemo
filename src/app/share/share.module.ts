import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent } from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective, TabDirective, AvatarDirective } from './directives';
import { AgoPipe } from './pipes';
import { CountDownComponent } from './components/count-down/count-down.component';
import { FooterComponent } from './components/footer/footer.component';
import { VerticalGridComponent } from './components/vertical-grid/vertical-grid.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProduceTileComponent } from './components/produce-tile/produce-tile.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { DialogComponent } from '../dialog';
import { DialogModule } from '../dialog/dialog.module';



@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    TabDirective,
    AvatarDirective,
    ProduceTileComponent,
    BackButtonComponent,
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    CommonModule,FormsModule,
    ScrollableTabComponent,
    DialogModule,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    TabDirective,
    AvatarDirective,
    ProduceTileComponent,
    BackButtonComponent
  ]
})
export class ShareModule { }
