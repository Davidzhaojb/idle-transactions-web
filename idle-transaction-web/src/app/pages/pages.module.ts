import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { AddListingComponent } from './add-listing/add-listing.component';
@NgModule({
    declarations: [PagesComponent, AddListingComponent],
    imports: [
        CommonModule,
        PagesRoutingModule
    ],
    exports: [PagesComponent]
})
export class PagesModule { }
