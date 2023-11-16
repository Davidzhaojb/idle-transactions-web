import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message.routing';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
@NgModule({
    declarations: [MessageComponent],
    imports: [
        CommonModule,
        NzCarouselModule,
        NzGridModule,
        MessageRoutingModule,
        NzCollapseModule
    ],
    exports: [
        MessageComponent,
    ]
})
export class MessageModule { }
