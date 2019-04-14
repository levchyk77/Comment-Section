import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService implements OnInit {

  private url = 'http://localhost:2403/comments-list';

  constructor(private http: HttpClient) { }

  ngOnInit() {  }
  // loads comments from server
  public getComments(): Observable<Comment[]> {
    let comments = this.http.get(this.url)
      .pipe(map(this.extractComments))
      .pipe(catchError(this.handleError));
    return comments;
  }
  public createComment(comment: Comment) {
    return this.http.post(this.url, comment);
  }
  public edditComment(comment: Comment) {
    return this.http.put(this.url + '/' + comment.id, comment);
  }
  public deleteComment(comment: Comment) {
    return this.http.delete(this.url + '/' + comment.id);
  }




  // creates an array of objets (Comment[])
  private extractComments(response) {
    let res = response;
    let comments: Comment[] = [];
    for (let re of res) {
      comments.push(new Comment(re.id, re.userName, re.comment));
    }
    return comments;
  }

  // ToDo: create the 'handleError' function
  // Copied and Pasted.
  private handleError(error: any, cought: Observable<any>): any {
    let message = '';

    // if (error instanceof Response) {
    //     let errorData = error.json().error || JSON.stringify(error.json());
    //     message = `${error.status} - ${error.statusText || ''} ${errorData}`
    // } else {
    //     message = error.message ? error.message : error.toString();
    // }

    // console.error(message);

    // return Observable.throw(message);
}
}
