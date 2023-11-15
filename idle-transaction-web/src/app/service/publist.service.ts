import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as queryString from 'querystring';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators';
import { API_CONFIG, ServicesModule } from './service.module';
import { LoginInfoModel, ResultModel } from './system.model';

@Injectable({ providedIn: ServicesModule })
export class PublistService {

    constructor(
        private http: HttpClient,
        @Inject(API_CONFIG) private uri: string
    ) { }

    /**
     * 发布商品
     */
    publist(params): Observable<ResultModel<LoginInfoModel>> {
        return this.http.post(this.uri + 'publist', params).pipe(
            map((res: ResultModel<LoginInfoModel>) => {
                return res;
            })
        )
    }
    /**
    * 获取所有商品列表
    */
    getList(): Observable<ResultModel<LoginInfoModel>> {
        return this.http.post(this.uri + 'getlist', '').pipe(
            map((res: ResultModel<LoginInfoModel>) => {
                return res;
            })
        )
    }
    /**
     * 获取详情
     */
    getDetail(params): Observable<ResultModel<LoginInfoModel>> {
        return this.http.post(this.uri + 'getdetail', params).pipe(
            map((res: ResultModel<LoginInfoModel>) => {
                return res;
            })
        )
    }
}
