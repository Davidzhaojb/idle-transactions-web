import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from 'src/app/component/swiper/swiper.component';
import { NzButtonModule, NzCarouselModule } from 'ng-zorro-antd';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AddListingComponent } from './add-listing.component';
import { AddListRoutingModule } from './add-list.routing';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [AddListingComponent, SwiperComponent],
    imports: [
        CommonModule,
        NzCarouselModule,
        NzGridModule,
        NzButtonModule,
        FormsModule,
        AddListRoutingModule
    ],
    exports: [
        AddListingComponent,
    ]
})
export class AddListModule { }
