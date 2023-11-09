import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
    footerMenu = ['首页', '闲置大厅', '消息通知', '联系我们', '个人中心']
    constructor() { }

    ngOnInit(): void {
    }

}
