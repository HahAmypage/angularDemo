import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRoutingModule } from './my-routing.module';
import { ShareModule } from '../share/share.module';
import { MyContainerComponent } from './components/my-container/my-container.component';


@NgModule({
  declarations: [MyContainerComponent],
  imports: [
    ShareModule,
    MyRoutingModule
  ]
})
export class MyModule { }
