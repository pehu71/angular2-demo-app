import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './components/app.component';
import {appRoutingProviders, routing} from "./routes";
import {SimplestComponent} from "./components/simplest.component";

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, SimplestComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}

