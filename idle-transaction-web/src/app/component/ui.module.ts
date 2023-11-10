import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule, } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ]
})
export class UiModule { }
