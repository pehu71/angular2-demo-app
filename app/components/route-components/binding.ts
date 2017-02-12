import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Subscription} from 'rxjs/Rx';
import {BindingDemo} from "../demo-components/binding-demo";

@Component({
    templateUrl: 'app/tpl/binding.html'
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
        this.dataSubscription.unsubscribe()
    }
}