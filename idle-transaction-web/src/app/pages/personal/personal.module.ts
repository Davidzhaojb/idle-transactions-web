import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal.component';
import { PersonalRoutingModule } from './personal-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
@NgModule({
    declarations: [PersonalComponent],
    imports: [
        CommonModule,
        NzButtonModule,
        NzMenuModule,
        NzLayoutModule,
        PersonalRoutingModule,
    ],
    exports: [
        PersonalComponent,
    ]
})
export class PersonalModule { }
