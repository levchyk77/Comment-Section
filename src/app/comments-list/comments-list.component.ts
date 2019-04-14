import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CommentsService } from '../shared/comments-service.service';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  commentsList: Comment[];
  errorMessage: string;

  @ViewChild('displayTmpl') displayTmpl: TemplateRef<any>;
  @ViewChild('editTmpl') editTmpl: TemplateRef<any>;

  constructor(private service: CommentsService) { }

  ngOnInit() {
    this.getComments();
  }
  public refresh() {
    this.getComments();
    console.log('refreshed');
  }
  public getComments() {
    this.service.getComments().subscribe(
      result => this.commentsList = result,
      error => this.errorMessage = error
    );
  // toDO: add a sort by date
  }
  public edditComment(comment: Comment) {
    console.log('editing...');
    this.service.edditComment(comment)
      .subscribe(() => { this.refresh();
                         comment.edditMode = false; } );
  }
  public deleteComment(comment: Comment) {
    this.service.deleteComment(comment)
      .subscribe( () => this.refresh() );
  }
  public goBack(comment: Comment) {
    comment.edditMode = false;
    this.refresh();
  }
  public getTemplate(comment: Comment) {
    return comment.edditMode ? this.editTmpl : this.displayTmpl;
  }

}
