import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
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
    constructor() { }

    ngOnInit(): void {
    }

}
