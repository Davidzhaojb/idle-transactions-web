import { TemplateRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { NzModalRef, NzModalService, NzMessageService } from 'ng-zorro-antd';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    confirmModal: NzModalRef;
    constructor(
        private modal: NzModalService,
        private slimModal: NzMessageService,
    ) { }


    /**
     * 轻量成功提示消息
     * @param {string} content
     * @memberof AlertService
     */
    okMsg(content: string) {
        this.slimModal.create('success', content);
    }

    /**
     * 轻量错误提示框
     * @param {string} content
     * @memberof AlertService
     */
    errorMsg(content: string) {
        this.slimModal.create('error', content);
    }

    /**
     * 轻量警告提示框
     * @param {string} content
     * @memberof AlertService
     */
    warningMsg(content: string) {
        this.slimModal.create('warning', content);
    }



    showConfirm(content: any, title: string = '温馨提示', buttons = ['确定', '取消'], okFun, cancelFun?, className?: string): void {
        this.confirmModal = this.modal.create({
            nzTitle: title,
            nzContent: content,
            nzOkText: buttons == null ? buttons[0] : '确定',
            nzCancelText: buttons == null ? buttons[1] : '取消',
            nzClassName: className ? className + ' ant-modal-body okalert brick-alert' : 'ant-modal-body okalert brick-alert',
            nzOnOk: () => {
                okFun();
            },
            nzOnCancel: () => {
                if (cancelFun !== undefined && cancelFun != null) {
                    cancelFun();
                }
            }
        });
    }
    touristsAlert(content: any, title: string = '温馨提示', botton = ['确定'], okFun, className: string = 'nztouristsAlert brick-alert') {
        this.confirmModal = this.modal.create({
            nzWidth: 480,
            nzTitle: title,
            nzContent: content,
            nzOkText: botton[0],
            nzCancelText: null,
            nzClassName: className,
            nzOnOk: () => {
                okFun()
            }
        })
    }
    hometownAlert(content: any, title: string = '温馨提示', botton = ['确定'], okFun, className: string = 'nztouristsAlert brick-alert') {
        this.confirmModal = this.modal.create({
            nzWidth: 480,
            nzTitle: title,
            nzContent: content,
            nzOkText: botton[0],
            nzCancelText: null,
            nzClassName: className,
            nzClosable: false,
            nzMaskClosable:false,
            nzOnOk: () => {
                okFun()
            }
        })
    }
    okAlert(content: string, title?: string, isauto?: boolean, okFun?, cancelFun?, cancelText?): void {
        let timer: any;
        const modal = this.modal.create({
            nzTitle: !title ? '温馨提示' : title,
            nzContent: content,
            nzClassName: 'okalert',
            nzCancelText: cancelText ? cancelText : null,
            nzOnOk: () => {
                clearTimeout(timer);
                if (okFun !== undefined && okFun != null) {
                    okFun();
                }
            },
            nzOnCancel: () => {
                clearTimeout(timer);
                if (cancelFun !== undefined && cancelFun != null) {
                    cancelFun();
                }
            }
        });
        if (isauto === undefined ? true : false) {
            timer = setTimeout(() => modal.destroy(), 3000);
        }
    }

    error(title, constent?: any): void {
        this.modal.error({
            nzTitle: title,
            nzContent: constent,
            nzClassName: 'okalert'
        });
    }

    warning(title, content?: any): void {
        this.modal.warning({
            nzTitle: title,
            nzContent: content,
            nzClassName: 'okalert'
        });
    }

    /**
     * 用户自定义对话框模板
     *  magno 2019-4-30
     */
    createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter?: TemplateRef<{}>) {
        this.confirmModal = this.modal.create({
            nzTitle: tplTitle,
        });

    }

}

