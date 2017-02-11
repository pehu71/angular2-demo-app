import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SimplestComponent} from "./components/simplest.component";


export const routes: Routes = [
    {path: '', component: SimplestComponent},
    // {path: '/rxjs', component: }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
