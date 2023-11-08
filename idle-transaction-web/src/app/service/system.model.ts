export interface ResultModel<T> {
    /**
     * 0：请求成功 ； 1：请求失败
     */
    error: number;
    /**
     * 错误状态码 具体可参考全局错误码
     */
    code: string;
    /**
     * 	错误信息
     */
    message: string;
    /**
     * 返回的Json对象
     */
    data: T;
}

export interface ISliderSecurity {
    needSecurityCode?: boolean;
    slidingImage: string;
    backImage: string;
    yHeight: number;
  }

export interface HomePicModel {
    Content: string;
    ImgCode: string;
    LimitCondition: string;
    SerialsID: number;
    State: string;
    Type: number;
}

export interface ThemeState {
    themeMode: ThemeMode;
}

export interface ThemeMode {
    themeCode: 'light' | 'dark';
    themeName: '浅色' | '深色';
}

/**
 * 数据返回结果实体对象
 */
export class PageResultModel {
    constructor() {
        this.list = [];
        this.totalCount = 0;
    }
    /**
     * 返回的list数据
     */
    list: any[];

    /**
     * 返回数据总记录数
     */
    totalCount: number;
}

/**
 * is need google auth 
 * 检查是否需要Google验证
 */
export interface NeedGoogleAuthModel {
    /**
     * 账号ID
     */
    accountId: string;
    /**
     * 登录是否需要是否需要Google验证
     */
    login: boolean;
    /**
     * 修改资金密码是否需要Google验证
     */
    moneyPassword: boolean;
    /**
     * 修改登录密码是否需要Google验证
     */
    password: boolean;
    /**
     * 转账是否需要Google验证
     */
    transfer: boolean;
    /**
     * 取款是否需要Google验证
     */
    withDraw: boolean;
}

export interface NeedSecurityCodeModel {
    backImage: string;
    needSecurityCode: boolean;
    slidingImage: string;
    yHeight: number;
}

export interface AuthSecurityCodeModel {
    width: number;
}

export interface LoginInfoModel {
    log: LoginLogModel;
    sn: string;
    imu: string;
    imt: string;
    imid: string;
    isSimplePassword:boolean;
}

export interface LoginLogModel {
    address: string;
    client: string;
    ip: string;
    loginTime: number;
}

export class PagedRequestDto {
    constructor() {
        this.pageIndex = 0;
        this.pageSize = 10
    }
    /**
     * 当前页索引  0标识第一页
     */
    pageIndex?: number;
    /**
     * 页大小 每页展示的数据记录数
     */
    pageSize?: number;
}


