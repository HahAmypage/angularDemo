import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject, combineLatest, merge } from 'rxjs';
import { DialogService } from 'src/app/dialog';
import { map, tap, share } from 'rxjs/operators';
import { ProductVariant } from '../../domain';
import { Payment } from '../payment';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmOrderComponent implements OnInit {

  item$: Observable<object | null>
  count$ = new Subject<number>();
  totalPrice$: Observable<number>;
  payments: Payment[];
  constructor(private dialogService: DialogService) { }

  
  ngOnInit() {

    this.payments = [
      {
        id: 1,
        name: '微信支付',
        icon: 'assets/icons/wechat_pay.png',
        desc: '50元以内可免密支付'
      },
      {
        id: 2,
        name: '支付宝',
        icon: 'assets/icons/alipay.png'
      },
      {
        id: 3,
        name: '找微信好友支付',
        icon: 'assets/icons/friends.png'
      }
    ];

    // 添加share就是共享这个流，当item$发生变化会通知其他使用它的流，不用重新跑这个流
    this.item$ = this.dialogService.getData()
    .pipe(tap(val => console.log(val),share()));

    const unitPrice$ = this.item$.pipe(
      map((item: {variant: ProductVariant ; count: number}) => item.variant.price)
    );
    
    const amount$ = this.item$.pipe(
      map((item: {variant: ProductVariant; count: number}) => item.count),
      tap(val => console.log(val))
    );

    // 合并流
    const margeCount$ =  merge(amount$ ,  this.count$);
    // 获取联合的数据，一般用于多个数据计算的时候
    this.totalPrice$ = combineLatest([unitPrice$,margeCount$])
    .pipe( map(([price, amount]) => price * amount));
  }

  handlerPay($event){

  }

  handleAmountChange(count: number){
    this.count$.next(count);
    console.log(count);
  }
}
