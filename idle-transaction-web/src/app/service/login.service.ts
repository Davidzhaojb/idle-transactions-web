import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as queryString from 'querystring';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators';
import { API_CONFIG, ServicesModule } from './service.module';
import { LoginInfoModel, ResultModel } from './system.model';

@Injectable({ providedIn: ServicesModule })
export class LoginService {

    constructor(
        private http: HttpClient,
        @Inject(API_CONFIG) private uri: string
    ) { }

    /**
     * 用户登录
     */
    login(params): Observable<ResultModel<LoginInfoModel>> {
        return this.http.post(this.uri + 'login', params).pipe(
            map((res: ResultModel<LoginInfoModel>) => {
                return res;
            })
        )
    }
    /**
     * 用户注册
     */
    register(params): Observable<ResultModel<LoginInfoModel>> {
        return this.http.post(this.uri + 'register', params).pipe(
            map((res: ResultModel<LoginInfoModel>) => {
                return res;
            })
        )
    }

}
