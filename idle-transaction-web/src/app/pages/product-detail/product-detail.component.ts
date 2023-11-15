import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { AlertService } from 'src/app/service/alert.service';
import { PublistService } from 'src/app/service/publist.service';
import { ResultModel } from 'src/app/service/system.model';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.less'],
    providers: [AlertService, NzMessageService]
})
export class ProductDetailComponent implements OnInit {
    productId: string;
    constructor(private route: ActivatedRoute, private publicService: PublistService, private alertService: AlertService) {
    }

    ngOnInit(): void {
        this.productId = this.route.snapshot.paramMap.get('id');
        this.getDetail();
        console.log('this.productId', this.productId);
    }
    /**
     * 获取商品详情
     */
    getDetail() {
        this.publicService.getDetail({ id: this.productId }).subscribe((res: ResultModel<any>) => {
            if (res && res.code == 1) {
                
            } else {
                this.alertService.errorMsg(res.msg);
            }
            console.log('res', res);
        })
    }
}
