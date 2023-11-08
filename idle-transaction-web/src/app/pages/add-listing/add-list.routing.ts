import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddListingComponent } from './add-listing.component';

const routes: Routes = [
    {
        path: '', component: AddListingComponent,
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
export class AddListRoutingModule { }
