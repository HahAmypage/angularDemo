import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective implements OnInit{
    constructor(private erl:ElementRef,private rd2:Renderer2){

    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.rd2.setStyle(this.erl.nativeElement,'grid-area','title');
    }
 }