import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendRoutingModule } from './recommend-routing.module';
import { ShareModule } from '../share/share.module';
import { RecommendContainerComponent } from './components/recommend-container/recommend-container.component';


@NgModule({
  declarations: [RecommendContainerComponent],
  imports: [
    ShareModule,
    RecommendRoutingModule
  ]
})
export class RecommendModule { }
