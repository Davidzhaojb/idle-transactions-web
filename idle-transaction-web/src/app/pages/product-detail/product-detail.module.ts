import { NgModule } from '@angular/core';
import { ShareModule } from 'src/share/share.module';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ProductDetailComponent } from './product-detail.component';
import { productDetailRoutingModule } from './product-detail-routing';
@NgModule({
    declarations: [ProductDetailComponent],
    imports: [
        productDetailRoutingModule,
        CommonModule,
        NzLayoutModule,
        NzMenuModule,
        ShareModule,
    ],
    exports: [
        ProductDetailComponent,
    ]
})
export class ProductDetailModule { 
    
}
