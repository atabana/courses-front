import { Component, OnInit } from '@angular/core';
import { CourseService } from './shared/course.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'courses-list',
  template: `
  <div>
    <h1>Upcoming Courses</h1>
    <hr/>
    <div class="row" >
      <div *ngFor="let course of courses" class="col-md-5">
       <course-thumbnail (click)="handleThumbnailClick(course.name)" [course]="course"></course-thumbnail>
      </div>
    </div>
  <div>
  `
})
export class CoursesListComponent implements OnInit{

  courses:any[]

  constructor(private courseService: CourseService, private toasterService: ToastrService){
  }

  ngOnInit(){
    this.courses = this.courseService.getCourses();

  }
  handleThumbnailClick(courseName){
    this.toasterService.success('success: ', courseName)
  }
}