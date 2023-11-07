import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '', redirectTo: '/app', pathMatch: 'full'
    },
    {
        path: 'app', loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule)
    },
    {
        path: '**', redirectTo: '/app'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
