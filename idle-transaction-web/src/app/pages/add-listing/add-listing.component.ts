import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { AlertService } from 'src/app/service/alert.service';
import { PublistService } from 'src/app/service/publist.service';
import { ResultModel } from 'src/app/service/system.model';

@Component({
    selector: 'app-add-listing',
    templateUrl: './add-listing.component.html',
    styleUrls: ['./add-listing.component.less'],
    providers: [AlertService, NzMessageService]
})
export class AddListingComponent implements OnInit {
    currentIndex: number = 0;
    size: NzButtonSize = 'large';
    formParams = {
        title: "",
        type: 0,
        price: null,
        describe: '',
        userName: '',
        telephone: null,
        city: '',
    }
    categoryLists = [
        { name: '机动车', icon: '../../../assets/images/category/icon1.png' },
        { name: '电子设备', icon: '../../../assets/images/category/icon2.png' },
        { name: '家用电器', icon: '../../../assets/images/category/icon3.png' },
        { name: '房地产', icon: '../../../assets/images/category/icon4.png' },
        { name: '服装、饰品', icon: '../../../assets/images/category/icon5.png' },
        { name: '家具', icon: '../../../assets/images/category/icon6.png' },
        { name: '箱包', icon: '../../../assets/images/category/icon7.png' },
        { name: '工具', icon: '../../../assets/images/category/icon8.png' },
        { name: '宠物零食、玩具', icon: '../../../assets/images/category/icon9.png' },
        { name: '书籍', icon: '../../../assets/images/category/icon10.png' },
        { name: '个人用品', icon: '../../../assets/images/category/icon11.png' },
        { name: '收藏品', icon: '../../../assets/images/category/icon12.png' },
    ]
    constructor(
        private alertService: AlertService,
        private publistService: PublistService
    ) { }

    ngOnInit(): void {
    }
    /**
     * 选择分类
     * @param i 
     */
    changeCat(i) {
        this.currentIndex = i;
        this.formParams.type = i;
    }
    /**
     * 发布
     */
    submite() {
        this.publistService.publist(this.formParams).subscribe((res: ResultModel<any>) => {
            console.log("resss", res);
            if (res && res.code == 1) {
                this.alertService.okAlert('发布成功')
            } else {
                this.alertService.okAlert(res.msg)
            }
        })
    }
}
