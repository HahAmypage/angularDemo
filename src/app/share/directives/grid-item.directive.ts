import { Directive, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';

@Directive({
    selector: '[appGridItem]',
})
export class GridItemDirective {
    // constructor(private elr:ElementRef,private rd2:Renderer2){

    // }
    // ngOnInit(): void {
    //     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //     //Add 'implements OnInit' to the class.
    //     this.rd2.setStyle(this.elr.nativeElement,'display','grid');
    //     this.rd2.setStyle(this.elr.nativeElement,'grid-template-areas',`'image' 'title'`);
    //     this.rd2.setStyle(this.elr.nativeElement,'place-items','center');
    //     this.rd2.setStyle(this.elr.nativeElement,'width','4rem');
    // }

    // 另一种写法
    @HostBinding('style.display') display = 'grid';
    @HostBinding('style.grid-template-areas') template = `'image' 'title'`;
    @HostBinding('style.place-items') place = 'center';
    @HostBinding('style.width') width = '4rem';

}
