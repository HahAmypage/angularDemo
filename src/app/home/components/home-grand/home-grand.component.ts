import { Component, OnInit } from '@angular/core';

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
      this.date = this.testDays(new Date(), 30);
  }

  testDays(date : Date , days:number){
    const dateInput = new Date(date);
    date.setDate(dateInput.getDate() - days);
    return date;
  }
}
