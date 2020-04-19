import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses/courses-list.component';
import { CourseThumbnailComponent } from './courses/course-thumbnail-component';
import { NavBarComponent } from './nav/navbar.component';
import { CourseService } from './courses/shared/course.service'
import { ToastrService } from './common/toastr.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CourseService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
