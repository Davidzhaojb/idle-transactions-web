import { NgModule } from '@angular/core';
import { IdleHallComponent } from './idle-hall.component';
import { IdleHallRoutingModule } from './idle-hall.routing';
import { ShareModule } from 'src/share/share.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
@NgModule({
    declarations: [IdleHallComponent],
    imports: [
        IdleHallRoutingModule,
        CommonModule,
        NzLayoutModule,
        NzMenuModule,
        ShareModule,
    ],
    exports: [
        IdleHallComponent,
    ]
})
export class IdleHallModule { }
