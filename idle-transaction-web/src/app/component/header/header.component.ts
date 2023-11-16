import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { AppConsts } from 'src/app/core/AppConsts';
import { AlertService } from 'src/app/service/alert.service';
import { StorageService } from 'src/app/service/storage.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
    providers: [AlertService, NzMessageService]
})
export class HeaderComponent implements OnInit {
    // 是否登录
    isLogin: boolean = false;
    // 头部菜单
    tabLists = [
        {
            name: '首页', isActive: true, router: 'app/home'
        },
        {
            name: '闲置大厅', isActive: false, router: 'app/idlehall'
        },
        {
            name: '消息通知', isActive: false, router: 'app/message'
        },
        {
            name: '联系我们', isActive: false, router: 'app/about'
        },
        {
            name: '个人中心', isActive: false, router: 'app/personal'
        }]
    constructor(
        private router: Router,
        private alert: AlertService,
        private storage: StorageService
    ) { }

    ngOnInit(): void {
        this.checkLogin();
    }
    /**
     * 判断是否登录
     */
    checkLogin() {
        this.storage.getItem('token') == null ? this.isLogin = false : this.isLogin = true;
        if (!this.isLogin) {
            this.router.navigate(['/app/home']);
        }
    }
    // 发布闲置
    publist() {
        if (this.isLogin) {
            this.router.navigate(['/app/addlist'])
        } else {
            this.alert.showConfirm(
                '暂未登录，是否立即登录',
                '温馨提示',
                ['确定', '取消'],
                () => {
                    this.router.navigate(['/app/login']);
                },
                () => { },
            )
        }
    }
    /**
     * 退出登录
     */
    exit() {
        this.alert.showConfirm(
            '确定要退出吗',
            '温馨提示',
            ['确定', '取消'],
            () => {
                this.storage.remove('token');
                this.router.navigate(['/app/home']);
                this.alert.okMsg('您已退出登录');
                AppConsts.isLogin = false;
            },
            () => { },
        );
    }
}
