import { Component, OnInit, Injectable, Injector, InjectionToken } from '@angular/core';

@Injectable()
class Product{
  constructor(private name: string,private color: string){

  }
}

@Injectable()
class PurchasOrder{
  private amount: number;
  constructor(private product: Product){

  }
}

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {

  data = {testid:1,data:new Date(),price:1333.4444};
  date :Date;
  price = 122.4455222;
  array = [0,2,4,6,8,10];
  constructor() { }

  ngOnInit() {
    const token = new InjectionToken<string>('baseUrl'); //token 避免冲突
      this.date = this.testDays(new Date(), 30);
      const injector = Injector.create({
        providers:[
          {
            provide: Product,
            useFactory: () =>{
              return new Product('iphone','白色');
            },
            deps:[] //这个对象依赖于什么类
          },
          {
            provide: PurchasOrder,
            useClass: PurchasOrder,
            deps:[Product]
          },
          {
            provide: token,
            useValue: 'http://localhost'
          }
        ]
      })

      // 从injector中获取对象只要把类型放到get里即可
      console.log(injector.get(Product)); 
      console.log(injector.get(PurchasOrder));
      console.log(injector.get(token))
  }

  testDays(date : Date , days:number){
    const dateInput = new Date(date);
    date.setDate(dateInput.getDate() - days);
    return date;
  }
}
