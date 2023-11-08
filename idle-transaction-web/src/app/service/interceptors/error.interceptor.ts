const status = {
    'status.0': ' 未知错误',
    'status.400': '错误的请求。由于语法错误，该请求无法完成。',
    'status.401': '未经授权。服务器拒绝响应。',
    'status.403': '已禁止。服务器拒绝响应。',
    'status.404': '未找到。无法找到请求的位置。',
    'status.405': '方法不被允许。使用该位置不支持的请求方法进行了请求。',
    'status.406': '不可接受。服务器只生成客户端不接受的响应。',
    'status.407': '需要代理身份验证。客户端必须先使用代理对自身进行身份验证。',
    'status.408': '请求超时。等待请求的服务器超时。',
    'status.409': '冲突。由于请求中的冲突，无法完成该请求。',
    'status.410': '过期。请求页不再可用。',
    'status.411': '长度必需。未定义“内容长度”。',
    'status.412': '前提条件不满足。请求中给定的前提条件由服务器评估为 false。',
    'status.413': '请求实体太大。服务器不会接受请求，因为请求实体太大。',
    'status.414': '请求 URI 太长。服务器不会接受该请求，因为 URL 太长。',
    'status.415': '不支持的媒体类型。服务器不会接受该请求，因为媒体类型不受支持。',
    'status.416': 'HTTP 状态代码 {0}',
    'status.500': '内部服务器错误。',
    'status.501': '未实现。服务器不识别该请求方法，或者服务器没有能力完成请求。',
    'status.503': '服务不可用。服务器当前不可用(过载或故障)。',
};

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, timeout, retryWhen, scan } from 'rxjs/internal/operators';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LoginService } from '../login.service';
import { StorageService } from '../storage.service';
import { AlertService } from '../alert.service';

/** 最大重试次数 */
const MAXRETYRCOUNT = 2;

const ignoreError = ['token'];

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {
    crowdingOut = false;
    constructor(
        private router: Router,
        private messageService: NzMessageService,
        private login: LoginService,
        private notificationService: NzNotificationService,
        private storage: StorageService,
        private alert: AlertService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const throwError = ignoreError.filter(u => req.url.match(u));
        return next.handle(req).pipe(
            timeout(180 * 1000),
            tap(
                response => {
                    if (response instanceof HttpResponse) {
                        if (response.url.includes('favicon.ico?time=')) {
                            response.headers.set('Content-Type', `image/x-icon; charset=utf-8`);
                        }
                        if (response.status === 200 && response.body && response.body.code !== 0) {
                            const message = response.body.message || '未知错误';
                            let isTourists = JSON.parse(this.storage.getItem('isTourists'));
                            // if (!isTourists) {
                            //     if (response.body.code === '0-1') {
                            //         AppConsts.userInfo.isLogin = false;
                            //         AppConsts.loopTimerObj = {};
                            //         AppConsts.loopTimerId = null;
                            //         AppConsts.breakOut++;

                            //         if (AppConsts.breakOut == 1) {
                            //             this.alert.hometownAlert('登录验证已失效，请重新登录！', '温馨提示', ['确定'], () => {
                            //                 this.storage.setItem({
                            //                     key: 'isTourists',
                            //                     value: true,
                            //                 });
                            //                 this.storage.setItem({
                            //                     key: 'isLogin',
                            //                     value: false,
                            //                 });
                            //                 window.open(window.location.origin + '/app/home/index', '_self');
                            //             });
                            //         }
                            //     } else if (response.body.code === '0-4') {
                            //         AppConsts.userInfo.isLogin = false;
                            //         AppConsts.loopTimerObj = {};
                            //         AppConsts.loopTimerId = null;
                            //         AppConsts.crowdingOut++;
                            //         if (AppConsts.crowdingOut == 1) {
                            //             this.alert.hometownAlert('您的账号在其它地方被登录，您被迫退出，如果不是您本人操作，请您注意账号安全！', '温馨提示', ['确定'], () => {
                            //                 this.storage.setItem({
                            //                     key: 'isTourists',
                            //                     value: true,
                            //                 });
                            //                 this.storage.setItem({
                            //                     key: 'isLogin',
                            //                     value: false,
                            //                 });
                            //                 window.open(window.location.origin + '/app/home/index', '_self');
                            //             });
                            //         }
                            //     }
                            // }
                        }
                    }
                },
                error => {
                    if (error instanceof HttpErrorResponse) {
                        if (throwError.length > 0) {
                            switch (error.status) {
                                case 401:
                                    this.router.navigate(['/app/home/index']);
                                    break;
                                default:
                                    throw error.error;
                            }
                        } else {
                            this.errorHandle(error);
                            let msg = status[`status.${error.status}`];
                            if (error.status === 0) {
                            }
                            this.messageService.error(msg, {
                                nzDuration: 3 * 1000,
                            });
                        }
                    }
                }
            )
        );
    }

    errorHandle(error) {
        switch (error.status) {
            case 0:
            case 400:
            case 401:
                break;
        }
    }
}
