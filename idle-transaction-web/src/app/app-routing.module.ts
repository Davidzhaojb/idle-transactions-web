import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '', redirectTo: '/app/home', pathMatch: 'full'
    },
    {
        path: 'app', loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule)
    },
    {
        path: '**', redirectTo: '/app/home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
