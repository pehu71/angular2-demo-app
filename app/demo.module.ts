import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BindingDemo} from "./components/demo-components/binding-demo";
import {DataService} from "./services/data.service";

@NgModule({
    imports: [CommonModule],
    declarations: [BindingDemo],
    exports: [BindingDemo],
    providers: [DataService]
})

export class DemoModule {}
