import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal.component';

const routes: Routes = [
    {
        path: '', component: PersonalComponent,
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
export class PersonalRoutingModule { }
