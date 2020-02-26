import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[appTap]',
})
export class TabDirective {
    @Input() @HostBinding('style.background-color') tabBgColor = '#faefe3';
    @Input() @HostBinding('style.color') tabColor = '#ca516a';
    @Input() @HostBinding('style.font-size') fontSize = '0.8rem';
    @Input() @HostBinding('style.padding') padding = '3px';
    @Input() @HostBinding('style.border-radius') tapRadius = '0';

 }