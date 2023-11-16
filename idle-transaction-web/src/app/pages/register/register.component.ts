import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
import { AlertService } from 'src/app/service/alert.service';
import { LoginService } from 'src/app/service/login.service';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.less'],
    providers: [NzMessageService,AlertService]
})
export class RegisterComponent implements OnInit {
    validateForm: FormGroup;
    params = {
        userName: '',
        userEmail: '',
        pwdGroup: {
            pwd: '',
            rePwd: ''
        }
    }
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private alert: AlertService,
        private loginService: LoginService
    ) {
        this.validateForm = this.fb.group({
            userName: ['', [Validators.required], [this.userNameAsyncValidator]],
            email: ['', [Validators.email, Validators.required]],
            password: ['', [Validators.required]],
            confirm: ['', [this.confirmValidator]],
        });
    }
    ngOnInit(): void {

    }
    submitForm(value: { userName: string; email: string; password: string; confirm: string; }): void {
        this.params.userName = value.userName;
        this.params.userEmail = value.email;
        this.params.pwdGroup.pwd = value.password;
        this.params.pwdGroup.rePwd = value.confirm;

        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        }
        console.log('this.params', this.params);
        this.loginService.register(this.params).subscribe(res => {
            console.log('ress', res);
            if (res && res.code == 1) {
                this.alert.okMsg(res.msg)
                this.router.navigate(['/app/login']);
            } else {
                this.alert.okMsg(res.msg)
            }
        })
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
        setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
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
