import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonInterceptor } from './common.interceptor';
import { AuthInterceptor } from './auth.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { LogInterceptor } from './log.interceptor';

export const httpInterceptorProvides = [
    // { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
