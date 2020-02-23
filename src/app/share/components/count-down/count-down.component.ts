import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  countDown$: Observable<string>;
  @Input() startDate: Date;
  @Input() futureDate: Date;

  private MILL_TO_SEC = 1000;

  constructor() { }

  ngOnInit() {
    this.countDown$ = this.getCountDownObervable(this.startDate,this.futureDate);
  }

  private getCountDownObervable(startDate: Date, furtureDate: Date){
    return interval(1000).pipe(
      map(elapse => this.diffInSec(startDate,furtureDate) - elapse),
      takeWhile(gap => gap >= 0),
      tap(val => console.log(val)), //打印出毫秒差值
      map(sec=>(
        {
          day: Math.floor(sec / 3600 /24),
          hour: Math.floor((sec/3600) % 24),
          minute: Math.floor((sec / 60) % 60),
          second: Math.floor(sec % 60)
        }
      )),
      tap(val => console.log(val)), // 打印出改变了格式后的时间
      map(({day,hour,minute,second}) => `${day}天${hour}:${minute}:${second}` )
      );
  }

  private diffInSec (start: Date, furture: Date): number{
    const result = furture.getTime() - start.getTime();
    return ( result / this.MILL_TO_SEC);
  }
}
