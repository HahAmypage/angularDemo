import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductVariant } from '../domain';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})
export class OrderService {
    constructor(private http: HttpClient){

    }

    
    getProductVariantsByProductId(productId: string) {
       return this.http.get<ProductVariant[]>(`${environment.baseUrl}/productVariants`,
       {params:{
            _embed: 'productVariantImages',
            _expand: 'product',
            productId: productId
       }});
    }
    
}