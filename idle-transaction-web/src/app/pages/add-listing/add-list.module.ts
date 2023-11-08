import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from 'src/app/component/swiper/swiper.component';
import { NzCarouselModule } from 'ng-zorro-antd';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AddListingComponent } from './add-listing.component';
import { AddListRoutingModule } from './add-list.routing';
@NgModule({
    declarations: [AddListingComponent, SwiperComponent],
    imports: [
        CommonModule,
        NzCarouselModule,
        NzGridModule,
        AddListRoutingModule
    ],
    exports: [
        AddListingComponent,
    ]
})
export class AddListModule { }
