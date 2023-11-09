import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
    selector: 'app-add-listing',
    templateUrl: './add-listing.component.html',
    styleUrls: ['./add-listing.component.less']
})
export class AddListingComponent implements OnInit {
    currentIndex: number = 0;
    size: NzButtonSize = 'large';
    formParams = {
        title: "",
        price: null,
        describe: '',
        name: '',
        phone: null,
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
    constructor() { }

    ngOnInit(): void {
    }
    /**
     * 选择分类
     * @param i 
     */
    changeCat(i) {
        this.currentIndex = i;
    }
    /**
     * 发布
     */
    submite() {

    }
}
