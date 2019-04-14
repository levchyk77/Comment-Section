import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CreateCommentsComponent } from './create-comments/create-comments.component';
import { CommentsService } from './shared/comments-service.service';
import { HoveredCommentDirective } from './comments-list/hovered-comment.directive';

@NgModule({
  declarations: [
    AppComponent,
    CommentsListComponent,
    CreateCommentsComponent,
    HoveredCommentDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
