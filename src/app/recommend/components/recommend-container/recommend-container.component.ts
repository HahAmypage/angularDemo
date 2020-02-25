import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad, Product } from 'src/app/share/domain';
import { switchMap, filter, map } from 'rxjs/operators';
import { HomeService } from 'src/app/home/services';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css']
})
export class RecommendContainerComponent implements OnInit {

  ad$: Observable<Ad> 

  products$: Observable<Product[]>;

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.ad$ = this.service.getAdByTab('hot').pipe(
      filter(ads => ads.length > 0),
      map(ad => ad[0])
    );
  
    this.products$ = this.service.getProductByTap('hot');
  }

}
