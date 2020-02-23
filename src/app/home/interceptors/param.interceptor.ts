import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const updateReque = req.clone({
            setParams: { icode: environment.icode }
        });
        console.log("param interceptor 处理完成")
        return next.handle(updateReque);
    }
}