import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-swiper',
    templateUrl: './swiper.component.html',
    styleUrls: ['./swiper.component.less']
})
export class SwiperComponent implements OnInit {
    @Input()
    array = [1, 2, 3, 4];
    effect = 'scrollx';
    constructor() { }

    ngOnInit(): void {
    }

}
