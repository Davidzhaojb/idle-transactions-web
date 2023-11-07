import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
    declarations: [SwiperComponent],
    imports: [
        CommonModule,
        NzCarouselModule
    ],
    exports: [SwiperComponent]
})
export class SwiperModule { }
