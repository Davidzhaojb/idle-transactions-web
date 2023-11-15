import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const ignoreToken = [
    '/login',
    '/api/regist',
    '/api/account/bind-wallet',
];

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('???')
        let reqUrl = req.url;
        let clonedRequest = req.clone({ url: reqUrl });
        const needToken = ignoreToken.filter(u => reqUrl.match(u));
        if (!needToken.length) {
            clonedRequest = clonedRequest.clone({
                url: reqUrl,
                headers: req.headers.set("Access-Control-Allow-Origin", `*`)
                    .set("content-type", 'application/x-www-form-urlencoded;text/html;charset=UTF-8')
            });
            if (reqUrl.includes('api/payment/confirm-transfer-speed-pay')) {
                clonedRequest = clonedRequest.clone({
                    url: reqUrl,
                    headers: new HttpHeaders()
                });
                // let headers = new HttpHeaders();
            }
        } else {
            clonedRequest = clonedRequest.clone({
                url: reqUrl,
                headers: req.headers.set("Access-Control-Allow-Origin", `*`)

            })
        }
        return next.handle(clonedRequest);
    }

}