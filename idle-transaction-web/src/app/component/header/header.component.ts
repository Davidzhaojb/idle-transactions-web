import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
    // 头部菜单
    tabLists = [{
        name: '首页', isActive: true
    },
    {
        name: '闲置大厅', isActive: false
    },
    {
        name: '消息通知', isActive: false
    },
    {
        name: '关于我们', isActive: false
    },
    {
        name: '个人中心', isActive: false
    }]
    constructor() { }

    ngOnInit(): void {
    }

}
