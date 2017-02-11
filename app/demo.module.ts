import {NgModule} from '@angular/core';
import {BindingDemo} from "./components/demo-components/binding-demo";

@NgModule({
    declarations: [BindingDemo],
    exports: [BindingDemo]
})

export class DemoModule {}
