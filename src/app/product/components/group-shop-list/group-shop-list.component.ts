import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { GroupOrder } from '../../domain';

@Component({
  selector: 'app-group-shop-list',
  templateUrl: './group-shop-list.component.html',
  styleUrls: ['./group-shop-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupShopListComponent implements OnInit {

  @Input() groudOrders: GroupOrder[]
  @Input() row = 2;
  constructor() { }

  ngOnInit() {
    this.groudOrders = [
      {
        id: 1,
        productId: 2,
        startBy: 'zhangsan',
        avatar: 'assets/avatars/avatar001.png',
        startAt: new Date(),
        remainingNumber: 2
      },
      {
        id: 2,
        productId: 2,
        startBy: 'lisi',
        avatar: 'assets/avatars/avatar002.png',
        startAt: new Date(2020,2,26),
        remainingNumber: 2
      }
    ]
  }

}
