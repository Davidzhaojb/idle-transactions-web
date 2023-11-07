import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";



const routes: Routes = [
    {
        path: '', component: PagesComponent,
        // canActivate: [AuthGuardService],
        // resolve: { pageResolverDatas: PagesResolverService },
        children: [
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
            },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class PagesRoutingModule { }
