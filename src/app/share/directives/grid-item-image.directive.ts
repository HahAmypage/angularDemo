import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[appGridItemImage]',
})
export class GridItemImageDirective implements OnInit{ 
    @Input() appGridItemImage = '2rem';
    // @Input() fitMode = 'cover';
    constructor(private erl:ElementRef,private rd2:Renderer2){

    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.rd2.setStyle(this.erl.nativeElement,'grid-area','image');
        this.rd2.setStyle(this.erl.nativeElement,'width',this.appGridItemImage);
        this.rd2.setStyle(this.erl.nativeElement,'height',this.appGridItemImage);
        this.rd2.setStyle(this.erl.nativeElement,'object-fit','cover');
    }

}