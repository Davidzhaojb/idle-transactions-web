import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Observer } from 'rxjs';
import { AlertService } from 'src/app/service/alert.service';
import { LoginService } from 'src/app/service/login.service';
import { StorageService } from 'src/app/service/storage.service';
import { ResultModel } from 'src/app/service/system.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less'],
    providers: [AlertService, NzMessageService]
})
export class LoginComponent implements OnInit {
    validateForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private loginService: LoginService,
        private alertService: AlertService,
        private storageService: StorageService
    ) {
        this.validateForm = this.fb.group({
            userName: ['', [Validators.required], [this.userNameAsyncValidator]],
            password: ['', [Validators.required]],
        });

    }
    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }
    submitForm(value: { userName: string; password: string; }): void {
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        }
        console.log('this.validateForm', this.validateForm);
        console.log('this.validateFormcontrols', this.validateForm.controls);

        const params = {
            userEmail: value.userName,
            pwd: value.password
        }
        this.loginService.login(params).subscribe((res: ResultModel<any>) => {
            console.log('ressss', res);
            if (res && res.code == 1) {
                this.router.navigate(['/app/home']);
                this.alertService.okMsg('登录成功');
                this.storageService.setItem({
                    key: 'token',
                    value: res.data.token
                });
            } else {
                this.alertService.errorMsg(res.msg);
            }
        })
        console.log(value);
    }

    resetForm(e: MouseEvent): void {
        e.preventDefault();
        this.validateForm.reset();
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }

    validateConfirmPassword(): void {
        // setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
    }

    userNameAsyncValidator = (control: FormControl) =>
        new Observable((observer: Observer<ValidationErrors | null>) => {
            setTimeout(() => {
                if (control.value === 'JasonWood') {
                    // you have to return `{error: true}` to mark it as an error event
                    observer.next({ error: true, duplicated: true });
                } else {
                    observer.next(null);
                }
                observer.complete();
            }, 1000);
        });

    confirmValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { error: true, required: true };
        } else if (control.value !== this.validateForm.controls.password.value) {
            return { confirm: true, error: true };
        }
        return {};
    };



}
