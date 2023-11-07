import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '', redirectTo: '/pages', pathMatch: 'full'
    },
    {
        path: 'pages', loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule)
    },
    {
        path: 'home', loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
