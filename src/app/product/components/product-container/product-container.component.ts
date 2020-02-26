import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductVariant, OrderService } from '../..';
import { ActivatedRoute } from '@angular/router';
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
    private dialogService: DialogService) { }

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
    this.dialogService.open(ProductVariantDialogComponent,{
      inputs: {},
      outputs: {},
      position: {
        top: `${top}%`,
        left: `0`,
        width: `100%`,
        height: `${100 - top}%`
      }
    });
  }
}
