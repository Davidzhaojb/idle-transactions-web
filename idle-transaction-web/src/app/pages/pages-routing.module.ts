import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { NgModule } from "@angular/core";



const routes: Routes = [
    {
        path: '', component: PagesComponent,
        // canActivate: [AuthGuardService],
        // resolve: { pageResolverDatas: PagesResolverService },
        children: [
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class PagesRoutingModule { }
  