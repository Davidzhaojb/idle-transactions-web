import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/internal/operators';

@Injectable()
/// 记录API请求时间
export class LogInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // get the request send time
        const startTime = Date.now();
        return next.handle(req).pipe(
            tap(
                event => {
                    status = '';
                    if (event instanceof HttpResponse) {
                        status = 'successed'
                    }
                }, () => status = 'failed'
            ),
            finalize(() => {
                // get the interval between the request time and the response time;
                const elapsedTime = Date.now() - startTime;
                const message = `${req.method} ${req.urlWithParams} ${status} in ${elapsedTime}ms;`
            })
        )
    }
}