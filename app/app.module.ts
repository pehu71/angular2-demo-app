import {NgModule} from '@angular/core';
import {DemoModule} from "./demo.module";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './components/app.component';
import {appRoutingProviders, routing} from "./routes";
import {Simplest} from "./components/route-components/simplest";
import {Binding} from "./components/route-components/binding";
import {HttpModule} from "@angular/http";
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from "@angular/common";

@NgModule({
    imports: [BrowserModule, DemoModule, HttpModule, routing],
    declarations: [AppComponent, Simplest, Binding],
    providers: [appRoutingProviders,
        Location,
        {provide: LocationStrategy, useClass: HashLocationStrategy} // can swap to PathLocationStrategy
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

