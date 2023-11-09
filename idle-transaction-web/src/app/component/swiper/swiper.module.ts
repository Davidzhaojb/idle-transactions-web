import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper.component';
import { ShareModule } from 'src/share/share.module';

@NgModule({
    declarations: [SwiperComponent],
    imports: [
        ShareModule,
        CommonModule,
    ],
    exports: [SwiperComponent]
})
export class SwiperModule { }
