import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ShareModule } from '../share/share.module';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { GroupItemComponent } from './components/group-item/group-item.component';
import { GroupShopListComponent } from './components/group-shop-list/group-shop-list.component';
import { ProductVariantDialogComponent } from './components/product-variant-dialog/product-variant-dialog.component';
import { ProductAmountComponent } from './components/product-amount/product-amount.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';


@NgModule({
  declarations: [
     ProductContainerComponent,
     GroupItemComponent,
     GroupShopListComponent,
     ProductVariantDialogComponent,
     ProductAmountComponent,
     ConfirmOrderComponent],
  imports: [
    ShareModule,
    ProductRoutingModule
  ],
  entryComponents:[
    ProductVariantDialogComponent
  ]
})
export class ProductModule { }
