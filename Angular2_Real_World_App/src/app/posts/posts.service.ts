import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "../users/user";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Post } from "./post";

@Injectable()
export class PostService {
   private postsUrl = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) {
    }


 getPosts(){
        let posts: Post[];
        return this.http.get(this.postsUrl).map(
            res => {
                return res.json();
            }
        ).catch(this.handleError);

    }

    getComments(id){
        return this.http.get(this.postsUrl+"/"+id+"/"+"comments").map(
            res => {
                return res.json();
            }
        ).catch(this.handleError);
    }

    getUsersPosts(userId){
    let posts: Post[];
        return this.http.get(this.postsUrl+"?userId="+userId).map(
            res => {
                return res.json();
            }
        ).catch(this.handleError);

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
