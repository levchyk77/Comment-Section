import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommentsService } from '../shared/comments-service.service';
import { Comment } from '../shared/comment';
import { CommentsListComponent } from '../comments-list/comments-list.component';

@Component({
  selector: 'app-create-comments',
  templateUrl: './create-comments.component.html',
  styleUrls: ['./create-comments.component.css']
})
export class CreateCommentsComponent implements OnInit {
  currentName: string;
  currentComment: string;

  commentCreator: FormGroup;
  userName: FormControl;
  comment: FormControl;

  // injecting the child 'comment-list' component
  @ViewChild(CommentsListComponent)
  private commentListComponent: CommentsListComponent;

  constructor(private fb: FormBuilder,
              private service: CommentsService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  // form creator
  createFormControls() {
    this.userName = this.fb.control('', [Validators.required, Validators.minLength(3)]);
    this.comment = this.fb.control('', [Validators.required, Validators.minLength(20)]);
  }
  createForm() {
    this.commentCreator = this.fb.group({
      userName: this.userName,
      comment: this.comment
    });
  }
  public createComment(commentCreator: FormGroup) {
    this.currentName = commentCreator.value.userName;
    this.currentComment = commentCreator.value.comment;

    let newComment = new Comment(undefined, this.currentName,
      this.currentComment);
    this.service.createComment(newComment)
      .subscribe(() => { this.commentListComponent.refresh(); } );
    this.resetForm();
  }


  private resetForm() {
    this.commentCreator.reset();
  }
}
