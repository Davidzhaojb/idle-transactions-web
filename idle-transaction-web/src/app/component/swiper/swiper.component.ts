import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-swiper',
    templateUrl: './swiper.component.html',
    styleUrls: ['./swiper.component.less']
})
export class SwiperComponent implements OnInit {
    array = [1, 2, 3, 4];
    effect = 'scrollx';
    constructor() { }

    ngOnInit(): void {
    }

}
