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

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseThumbnailComponent,
    CourseDetailsComponent,
    CreateCourseComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CourseService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
