import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule, NzCarouselModule } from 'ng-zorro-antd';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routing';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [AboutComponent],
    imports: [
        CommonModule,
        NzCarouselModule,
        NzGridModule,
        AboutRoutingModule,
        CommonModule,
        NzButtonModule,
        FormsModule,
    ],
    exports: [
        AboutComponent,
    ]
})
export class AboutModule { }
