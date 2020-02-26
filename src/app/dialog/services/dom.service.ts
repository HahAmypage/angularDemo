import { ComponentFactoryResolver, ApplicationRef, Injector, Inject, Type, EmbeddedViewRef, ComponentRef, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';


export interface ChildConfig{
    inputs: object;
    outputs: object;
    position?: DialogPos;
}

export interface DialogPos{
    top: string;
    left: string;
    width: string;
    height: string;
}

@Injectable({
    providedIn: 'root'
})
export class DomService {

    private childComponentRef: ComponentRef<any>;

    constructor(
        private resolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
        @Inject(DOCUMENT) private domcument: Document){ }

    public appendComponentTo(parentId: string, child: Type<any>,childConfig: ChildConfig)  {
        // 通过工厂创建组件，把injector放进去是因为该组件可能依赖其他东西
        const childComponentRef = this.resolver.resolveComponentFactory(child).create(this.injector);
        // 把input output写进去
        this.attachConfig(childConfig, childComponentRef);
        this.childComponentRef = childComponentRef;
        // 把组件添加到组件树里面
        this.appRef.attachView(childComponentRef.hostView);
        // 把组件添加到DOM里
        const childDOMElement = (childComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        this.domcument.getElementById(parentId).appendChild(childDOMElement);
    }

    public removeComponent(){
        this.appRef.detachView(this.childComponentRef.hostView);
    }

    public attachConfig(config: ChildConfig, componentRef: ComponentRef<any>){
        const inputs = config.inputs;
        const outputs = config.outputs;

        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                const element = inputs[key];
                componentRef.instance[key] = element;
            }
        }

        for (const key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                const element = outputs[key];
                componentRef.instance[key] = element;
            }
        }
    }

}