import { Component, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductVariant, OrderService } from '../..';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { DialogService } from 'src/app/dialog';
import { ProductVariantDialogComponent } from '../product-variant-dialog/product-variant-dialog.component';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {

  variant$: Observable<ProductVariant[]>

  selectIndex  = 0;

  imageIdex = 0

  constructor(private service: OrderService,private router: ActivatedRoute,
    private dialogService: DialogService , private route: Router) { }

  ngOnInit() {
    const productId$ = this.router.paramMap.pipe(
      filter(param => param.has('productId')),
      map(params => params.get('productId'))
      );
  
      this.variant$ = productId$.pipe(
        switchMap(productId => this.service.getProductVariantsByProductId(productId))
      );
  }

  handleDirectBuy(variants: ProductVariant){

  }


  handleGroupBuy(variants: ProductVariant){
    const top = 40;
    //Subject既是一个Observable,也是一个Observer
    //Subject是可以next()也可以进行subscribe
    //Behavior是Subject的一个特殊值
    const formSubmitted = new EventEmitter;

    formSubmitted.subscribe(ev => {
      console.log("打印："+ev);
      this.dialogService.saveData(ev);
      this.route.navigate(['/order/comfirm']);
    });

    const selected = new EventEmitter();
    selected.subscribe(ev =>{
      console.log("打印："+ev);
      this.selectIndex = ev;
    })

    this.dialogService.open(ProductVariantDialogComponent,{
      inputs: {
        variants: variants,
        selectedVariantIndex: this.selectIndex
      },
      outputs: {
        formSubmitted: formSubmitted,
        selected: selected
      },
      position: {
        top: `${top}%`,
        left: `0`,
        width: `100%`,
        height: `${100 - top}%`
      }
    });
  }
}
