/**
 * Created by Administrator on 2017/4/27.
 */
/**
 * Created by Administrator on 2017/4/25.
 */
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { data } from './data';

@Injectable()
export class dataService {
    private listUrl = 'api/names';  // URL to web API

    constructor (private http: Http) {}

    getNames(): Observable<data[]> {
        return this.http.get(this.listUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getName(url: number | string): Observable<any> {
        return this.http.get('/api/'+url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getDetail(url: number | string): Observable<any> {
        return this.http.get('/'+ url )
            .map(this.extractData)
            .catch(this.handleError);
    }
    getNews(){
        return this.http.get('/api/News')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}

/*
 private heroesUrl = 'app/heroes.json'; // URL to JSON file
 */


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */