import { Injectable } from '@angular/core';
import { ServicesModule } from './service.module';

@Injectable({
    providedIn: ServicesModule
})
export class StorageService {

    constructor() { }

    getItem(key: string, type = 'local'): string {
        return window[`${type}Storage`].getItem(key);
    }

    setItem(params: { [key: string]: any } | { [key: string]: any }[], type = 'local') {
        const kv = Array.isArray(params) ? params : [params];
        for (const { key, value } of kv) {
            window[`${type}Storage`].setItem(key, value.toString());
        }
    }

    remove(params: string | string[], type = 'local') {
        const kv = Array.isArray(params) ? params : [params];
        for (const key of kv) {
            window[`${type}Storage`].removeItem(key);
        }
    }

}
