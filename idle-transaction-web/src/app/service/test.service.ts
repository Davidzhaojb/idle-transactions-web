import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { API_CONFIG, ServicesModule } from "./service.module";
import { map } from "rxjs/internal/operators";
import { ResultModel } from "./system.model";
import { Observable } from "rxjs";


@Injectable({ providedIn: ServicesModule })
export class TestService {
    constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }
    /**
     * 热门游戏和热门第三方
     */
    getHotLottery(): Observable<ResultModel<any>> {
        console.log('到这里了吗',this.uri);
        return this.http.get(this.uri + 'test').pipe(map((res: ResultModel<any>) => res));
    }
}
