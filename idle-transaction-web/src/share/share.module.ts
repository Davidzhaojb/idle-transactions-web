import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NzCarouselModule, NzLayoutModule, NzButtonModule, NzProgressModule, NzGridModule, NzDatePickerModule, NzTableModule, NzSelectModule, NzModalModule, NzBreadCrumbModule, NzCheckboxModule, NzSliderModule, NzFormModule, NzIconModule, NzPopoverModule, NzBadgeModule, NzListModule, NzDropDownModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { RouterModule } from '@angular/router';
import { IconDefinition } from '@ant-design/icons-angular';
import {
    SearchOutline, FileImageOutline, SmileOutline, PlusCircleOutline, MinusCircleOutline, SettingFill,
    CloseCircleOutline
} from '@ant-design/icons-angular/icons';
import { UiModule } from "src/app/component/ui.module";
const icons: IconDefinition[] = [SearchOutline, FileImageOutline,
    SmileOutline, PlusCircleOutline, SettingFill, MinusCircleOutline, CloseCircleOutline];

// 这里加入自定义公共组件----------------------------------------
let declarations = [
];

@NgModule({
    declarations: [declarations],
    imports: [
        CommonModule,
        NzCarouselModule,
        NzGridModule,
        NzLayoutModule,
        NzButtonModule,
        NzProgressModule,
        FormsModule,
        NzDatePickerModule,
        NzTableModule,
        NzSelectModule,
        NzModalModule,
        NzBreadCrumbModule,
        RouterModule,
        NzInputModule,
        NzCheckboxModule,
        NzSliderModule,
        NzFormModule,
        ReactiveFormsModule,
        NzBadgeModule,
        NzDropDownModule,
        NzPopoverModule,
        NzListModule,
        NzSpinModule,
        NzPaginationModule,
        NzInputModule,
        NzStatisticModule,
        UiModule,
        NzIconModule.forRoot(icons),

    ],
    exports: [
        CommonModule,
        NzCarouselModule,
        NzGridModule,
        NzLayoutModule,
        NzButtonModule,
        NzProgressModule,
        FormsModule,
        NzDatePickerModule,
        NzTableModule,
        NzSelectModule,
        NzDropDownModule,
        NzModalModule,
        NzBreadCrumbModule,
        NzListModule,
        RouterModule,
        NzInputModule,
        NzCheckboxModule,
        NzSliderModule,
        NzFormModule,
        NzIconModule,
        ReactiveFormsModule,
        NzPopoverModule,
        NzBadgeModule,
        NzSpinModule,
        NzStatisticModule,
        NzInputModule,
        UiModule,
        NzPaginationModule,
    ],
})

export class ShareModule { }