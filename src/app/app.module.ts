import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses/courses-list.component';
import { CourseThumbnailComponent } from './courses/course-thumbnail-component';
import { NavBarComponent } from './nav/navbar.component';
import { CourseService } from './courses/shared/course.service'
import { ToastrService } from './common/toastr.service';
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
    DurationPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CourseService, ToastrService, CourseRouteActivator,CourseListResolver,AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
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