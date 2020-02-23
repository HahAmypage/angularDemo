import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ShareModule } from '../share/share.module';
import { CategoryContainerComponent } from './components/category-container/category-container.component';


@NgModule({
  declarations: [CategoryContainerComponent],
  imports: [
    ShareModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
