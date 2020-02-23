import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ShareModule } from '../share/share.module';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';


@NgModule({
  declarations: [ChatContainerComponent],
  imports: [
    ShareModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
