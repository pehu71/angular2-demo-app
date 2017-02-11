import {NgModule}      from '@angular/core';
import {DemoModule} from "./demo.module";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './components/app.component';
import {appRoutingProviders, routing} from "./routes";
import {Simplest} from "./components/route-components/simplest";
import {Binding} from "./components/route-components/binding";

@NgModule({
    imports: [BrowserModule, DemoModule, routing],
    declarations: [AppComponent, Simplest, Binding],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}

