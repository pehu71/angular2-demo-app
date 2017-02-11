import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Simplest} from "./components/route-components/simplest";
import {Binding} from "./components/route-components/binding";


export const routes: Routes = [
    {path: '', component: Simplest},
    {path: 'binding', component: Binding}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
