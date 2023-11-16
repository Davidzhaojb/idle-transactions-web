import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppConsts } from 'src/app/core/AppConsts';
import { PublistData } from 'src/app/modules/publist.module';
import { PublistService } from 'src/app/service/publist.service';
import { ResultModel } from 'src/app/service/system.model';
import { changeDate } from 'src/app/utils/tools';

@Component({
    selector: 'app-idle-hall',
    templateUrl: './idle-hall.component.html',
    styleUrls: ['./idle-hall.component.less']
})
export class IdleHallComponent implements OnInit {
    dataList = [];
    categoryLists = AppConsts.categoryLists;
    constructor(
        private route: ActivatedRoute,
        private publishService: PublistService
    ) { }

    ngOnInit(): void {
        // this.route.params.subscribe(params => {
        //     const id = params['id'];
        //     // 在这里处理 id 的逻辑
        // });
        this.getListData();
    }
    // 获取商品列表
    getListData() {
        this.publishService.getList().subscribe((res: ResultModel<any>) => {
            if (res && res.code == 1) {
                this.dataList = res.data;
                this.dataList.forEach(e => {
                    e.createdTime = changeDate(e.createdTime)
                });
            }
        })
    }
}
