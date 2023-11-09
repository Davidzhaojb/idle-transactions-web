import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdleHallComponent } from './idle-hall.component';

const routes: Routes = [
    {
        path: '', component: IdleHallComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class IdleHallRoutingModule { }
