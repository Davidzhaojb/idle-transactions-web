import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './message.component';

const routes: Routes = [
    {
        path: '', component: MessageComponent,
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
export class MessageRoutingModule { }
