import { NgModule } from '@angular/core';
import { IdleHallComponent } from './idle-hall.component';
import { IdleHallRoutingModule } from './idle-hall.routing';
import { ShareModule } from 'src/share/share.module';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [IdleHallComponent],
    imports: [
        IdleHallRoutingModule,
        CommonModule,
    ],
    exports: [
        IdleHallComponent,
    ]
})
export class IdleHallModule { }
