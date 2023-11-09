import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NzCarouselModule } from 'ng-zorro-antd';
import { NzGridModule } from 'ng-zorro-antd/grid';
@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        NzCarouselModule,
        NzGridModule,
        HomeRoutingModule,
    ],
    exports: [
        HomeComponent,
    ]
})
export class HomeModule { }
