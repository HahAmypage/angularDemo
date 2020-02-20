import { Directive, ElementRef, Renderer2, OnInit, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective{

    @HostBinding('style.grid-area') area = 'title';
    @HostBinding('style.font-size')  @Input() font ;

    // constructor(private erl:ElementRef,private rd2:Renderer2){

    // }

    // ngOnInit(): void {
    //     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //     //Add 'implements OnInit' to the class.
    //     this.rd2.setStyle(this.erl.nativeElement,'grid-area','title');
    // }

    
 }