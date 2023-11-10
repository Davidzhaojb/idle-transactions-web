import { NgModule } from '@angular/core';
import { ShareModule } from 'src/share/share.module';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RegisterComponent } from './register.component';
import { registerRoutingModule } from './register-routing';
@NgModule({
    declarations: [RegisterComponent],
    imports: [
        registerRoutingModule,
        CommonModule,
        NzLayoutModule,
        NzMenuModule,
        ShareModule,
    ],
    exports: [
        RegisterComponent,
    ]
})
export class RegisterModule {

}
