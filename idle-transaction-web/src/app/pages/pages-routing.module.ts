import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
            },
            {
                path: 'personal',
                loadChildren: () => import('./personal/personal.module').then(mod => mod.PersonalModule)
            },
            {
                path: 'addlist',
                loadChildren: () => import('./add-listing/add-list.module').then(mod => mod.AddListModule)
            },
            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class PagesRoutingModule { }
