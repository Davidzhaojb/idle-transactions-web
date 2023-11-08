import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
    // 头部菜单
    tabLists = [{
        name: '首页', isActive: true, router: 'app/home'
    },
    {
        name: '闲置大厅', isActive: false, router: 'app/home'
    },
    {
        name: '消息通知', isActive: false, router: 'app/home'
    },
    {
        name: '关于我们', isActive: false, router: 'app/home'
    },
    {
        name: '个人中心', isActive: false, router: 'app/personal'
    }]
    constructor() { }

    ngOnInit(): void {
    }

}
