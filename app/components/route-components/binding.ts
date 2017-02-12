import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Subscription} from 'rxjs/Rx';
import {BindingDemo} from "../demo-components/binding-demo";

@Component({
    template: `
        <h3>Nice data binding model</h3>
        
        <div class="alert alert-info">
            <p>Just forget about '&lt;', '=', '@' and '&' binding definitions. Forget about messing up with scopes and
                controllers. Think
                only of <strong>inputs</strong> and <strong>outputs</strong>.</p>
        </div>
        
        <binding-demo [inputData]="listOfBooks" (onRowClicked)="onChildOutput($event)"></binding-demo>
`
})

export class Binding implements OnInit, OnDestroy {

    @ViewChild(BindingDemo) child: BindingDemo;

    listOfBooks: Object;
    dataSubscription: Subscription;
    dblSubscription: Subscription;

    constructor (private dataService: DataService) {}

    ngOnInit(): void {
        this.dataSubscription = this.dataService.getBooks().subscribe(res => this.listOfBooks = res['books']);
        this.dblSubscription = this.child.rowDbl.subscribe(res => console.log(['double click via subscription', res]))
    }

    onChildOutput(e: Object) {
        console.log(['click - via event in HTML', e]);
    }

    ngOnDestroy(): void {
        this.dataSubscription.unsubscribe();
        this.dblSubscription.unsubscribe();
    }
}