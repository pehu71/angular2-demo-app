import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
    selector: 'my-app',
    templateUrl: 'app/tpl/app-root.html'
})

export class AppComponent implements OnInit, OnDestroy {

    public url: any;
    public routerEvent: any;
    routerSubscription: Subscription;

    constructor (private router: Router) {

    }

    ngOnInit(): void {
        this.routerSubscription = this.router.events
            .subscribe(res => {
                this.url = this.router.url;
                this.routerEvent = res;
            });
    }

    ngOnDestroy(): void {
        this.routerSubscription.unsubscribe()
    }
}
