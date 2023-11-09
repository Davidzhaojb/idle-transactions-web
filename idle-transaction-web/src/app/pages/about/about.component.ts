import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
    size: NzButtonSize = 'large';
    constructor() { }

    ngOnInit(): void {
    }

    submite() {

    }
}
