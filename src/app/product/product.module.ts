import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ShareModule } from '../share/share.module';
import { ProductContainerComponent } from './components/product-container/product-container.component';


@NgModule({
  declarations: [ProductContainerComponent],
  imports: [
    ShareModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
