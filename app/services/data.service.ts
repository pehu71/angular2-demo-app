import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: Http) {}

    getBooks() {
        return this.http.get('data/books.json')
            .map(res => res.json());
    }

}
