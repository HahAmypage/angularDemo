import { Injectable, Inject, Type } from '@angular/core';
import { DomService, ChildConfig } from './dom.service';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    private readonly dialogElementId = 'dialog-container';
    private readonly overlayElementId = 'overlay';

    // 这个流会一直保留最新的元素
    private data$ = new  BehaviorSubject<object | null>(null);

    constructor(
        private domService: DomService,
        @Inject(DOCUMENT) private document: Document
    ){  }

    open(component: Type<any>, childConfig: ChildConfig){
        this.domService.appendComponentTo(this.dialogElementId,component,childConfig);
        if(childConfig.position){
            const childElement = this.document.getElementById(this.dialogElementId);
            childElement.style.top = childConfig.position.top;
            childElement.style.left = childConfig.position.left;
            childElement.style.height = childConfig.position.height;
            childElement.style.width = childConfig.position.width;
        }
        this.toggleAll();
        this.data$.next(null);
    }

    saveData(val: object | null){
        this.data$.next(val);
    }

    getData(){
        return this.data$.asObservable();
    }

    close(){
        this.domService.removeComponent();
        this.toggleAll();
    }

    private toggleAll(){
        this.toggleVisibility(this.document.getElementById(this.dialogElementId));
        this.toggleVisibility(this.document.getElementById(this.overlayElementId));
    }

    private toggleVisibility(element){
        if(element.classList.contains('show')){
            element.classList.remove('show');
            element.classList.add('hidden');
            return;
        }
        if(element.classList.contains('hidden')){
            element.classList.remove('hidden');
            element.classList.add('show');
        }
    }
}

