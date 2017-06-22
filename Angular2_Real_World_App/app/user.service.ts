import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "./user";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {

    private userURL = 'http://jsonplaceholder.typicode.com/users';

    constructor(private http: Http) {
    }

    getUsers(): Observable<User[]> {
        let user: User[];
        return this.http.get(this.userURL).map(
            res => {
                user = res.json();
                return user;
            }
        ).catch(this.handleError);

    }
     postUser(data){
        let user: User[];
         return this.http.post(this.userURL, data).map(res => {
                user = res.json();
                return user;
            }).catch(this.handleError);

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


    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

}