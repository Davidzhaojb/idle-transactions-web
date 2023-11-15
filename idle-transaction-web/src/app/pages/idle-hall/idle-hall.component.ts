import { Component, OnInit } from '@angular/core';
import { PublistData } from 'src/app/modules/publist.module';
import { PublistService } from 'src/app/service/publist.service';
import { ResultModel } from 'src/app/service/system.model';

@Component({
    selector: 'app-idle-hall',
    templateUrl: './idle-hall.component.html',
    styleUrls: ['./idle-hall.component.less']
})
export class IdleHallComponent implements OnInit {
    dataList: PublistData;
    categoryLists = [
        {
            name: '全部分类', icon: '../../../assets/images/category/icon1.png', isOpen: 'true', childrens: [

            ]
        },
        {
            name: '机动车', icon: '../../../assets/images/category/icon1.png', isOpen: 'false', childrens: [
                { name: '摩托车', isSelect: false },
                { name: '其它', isSelect: false },
            ]
        },
        {
            name: '电子设备', icon: '../../../assets/images/category/icon2.png', isOpen: 'false', childrens: [
                { name: '手机', isSelect: false },
                { name: '电脑', isSelect: false },
                { name: '平板', isSelect: false },
                { name: '耳机', isSelect: false },
                { name: '其它', isSelect: false },
            ]
        },
        {
            name: '家用电器', icon: '../../../assets/images/category/icon3.png', isOpen: 'false', childrens: [
                { name: '摩托车', isSelect: false },
                { name: '其它', isSelect: false }
            ]
        },
        {
            name: '房地产', icon: '../../../assets/images/category/icon4.png', isOpen: 'false', childrens: [
                { name: '摩托车', isSelect: false },
                { name: '其它', isSelect: false }
            ]
        },
        {
            name: '服装、饰品', icon: '../../../assets/images/category/icon5.png', isOpen: 'false', childrens: [
                { name: '摩托车', isSelect: false },
                { name: '其它', isSelect: false }
            ]
        },
        {
            name: '家具', icon: '../../../assets/images/category/icon6.png', isOpen: 'false', childrens: [
                { name: '摩托车', isSelect: false },
                { name: '其它', isSelect: false }
            ]
        },
        {
            name: '箱包', icon: '../../../assets/images/category/icon7.png', isOpen: 'false', childrens: [
                { name: '摩托车', isSelect: false },
                { name: '其它', isSelect: false }
            ]
        },
        {
            name: '工具', icon: '../../../assets/images/category/icon8.png', isOpen: 'false', childrens: [
                { name: '摩托车', isSelect: false },
                { name: '其它', isSelect: false }
            ]
        },
        {
            name: '宠物零食、玩具', icon: '../../../assets/images/category/icon9.png', isOpen: 'false', childrens: [
                { name: '摩托车', isSelect: false },
                { name: '其它', isSelect: false }
            ]
        },
        {
            name: '书籍', icon: '../../../assets/images/category/icon10.png', isOpen: 'false', childrens: [
                { name: '摩托车', isSelect: false },
                { name: '其它', isSelect: false }
            ]
        },
        {
            name: '个人用品', icon: '../../../assets/images/category/icon11.png', isOpen: 'false', childrens: [
                { name: '摩托车', isSelect: false },
                { name: '其它', isSelect: false }
            ]
        },
        {
            name: '收藏品', icon: '../../../assets/images/category/icon12.png', isOpen: 'false', childrens: [
                { name: '摩托车', isSelect: false },
                { name: '其它', isSelect: false }
            ]
        },
    ]
    constructor(
        private publishService: PublistService
    ) { }

    ngOnInit(): void {
        this.getListData();
    }
    // 获取商品列表
    getListData() {
        this.publishService.getList().subscribe((res: ResultModel<any>) => {
            console.log('resss', res)
            if (res && res.code == 1) {
                this.dataList = res.data
            }
        })
    }
}
