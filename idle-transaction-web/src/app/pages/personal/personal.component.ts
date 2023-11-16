import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { PublistData } from 'src/app/modules/publist.module';
import { PublistService } from 'src/app/service/publist.service';
import { ResultModel } from 'src/app/service/system.model';
import { changeDate } from 'src/app/utils/tools';

@Component({
    selector: 'app-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.less']
})
export class PersonalComponent implements OnInit {
    size: NzButtonSize = 'small';
    currentIndex: number = 0
    dataList = [];
    columnListMenu = [
        '我的资料',
        '我的发布',
        '我的收藏',
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
                this.dataList = res.data;
                this.dataList.forEach(e => {
                    e.createdTime = changeDate(e.createdTime);
                });
            }
        })
    }

    changeIdx(i) {
        this.currentIndex = i;
    }
}
