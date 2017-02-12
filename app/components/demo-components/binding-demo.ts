import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'binding-demo',
    templateUrl: 'app/tpl/binding-demo.html'
})

export class BindingDemo {
// todo: add doubleclick via Emitter subscription in parent
    @Input() inputData: Array<Object>;

    @Output('onRowClicked') outputEvent: EventEmitter<Object>;
    @Output() rowDbl: EventEmitter<Object>;

    constructor() {
        this.outputEvent = new EventEmitter();
        this.rowDbl = new EventEmitter();
    }

    dataRowClicked(e: Object): void {
        this.outputEvent.emit(e);
    }

    dataRowDbl(e: Object): void {
        this.rowDbl.emit(e);
    }

}
