import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ShareModule } from '../share/share.module';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { GroupItemComponent } from './components/group-item/group-item.component';
import { GroupShopListComponent } from './components/group-shop-list/group-shop-list.component';


@NgModule({
  declarations: [
     ProductContainerComponent,
     GroupItemComponent,
     GroupShopListComponent],
  imports: [
    ShareModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
