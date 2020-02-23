import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  // startDate = new Date(2020,2,23);
  futureDate = new Date(2020,1,26); //注意这里转换后是2020-2-26的零点
  startDate = new Date(Date.now());
  
  constructor() { 
    
  }

  ngOnInit() {
  }

}
