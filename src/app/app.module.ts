import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses/courses-list.component';
import { CourseThumbnailComponent } from './courses/course-thumbnail-component';
import { NavBarComponent } from './nav/navbar.component';
import { CourseService } from './courses/shared/course.service'
import { ToastrService } from './common/toastr.service';
import { SimpleModalComponent } from './common/simple-modal.component';

import { JQ_TOKEN } from './common/jQuery.service'
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { CreateCourseComponent } from './courses/create-course.component';
import { Error404Component } from './errors/error-404.component';
import { CourseRouteActivator } from './courses/course-details/course-route-activator.service';
import { CourseListResolver } from './courses/course-list-resolver.service';
import { AuthService }  from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './courses/course-details/create-session.component';
import { SessionListComponent } from './courses/course-details/session-list.component';
import { CollapsableWellComponent } from './common/collapseable-well.component';
import { DurationPipe } from './courses/shared/duration.pipe';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { UpvoteComponent } from './courses/course-details/upvote.component';
import { VoterService } from './courses/course-details/voter.service';
import {HttpClientModule} from '@angular/common/http'

let jQuery = window['$']

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseThumbnailComponent,
    CourseDetailsComponent,
    CreateCourseComponent,
    NavBarComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsableWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [CourseService, ToastrService, CourseRouteActivator,CourseListResolver,AuthService,VoterService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }, 
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateCourseComponent){

  if(component.isDirty){
    return window.confirm('You have not saved this Course, do you really want to cancel?')
  }
}