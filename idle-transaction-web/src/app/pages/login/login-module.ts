import { NgModule } from '@angular/core';
import { ShareModule } from 'src/share/share.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing';
@NgModule({
    declarations: [LoginComponent],
    imports: [
        LoginRoutingModule,
        CommonModule,
        ShareModule,
    ],
    exports: [
        LoginComponent,
    ]
})
export class LoginModule { 
    
}
