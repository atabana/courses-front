import { Component, OnInit } from '@angular/core';
import { CourseService } from './shared/course.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';

declare let toastr

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

  constructor(private courseService: CourseService){
  }

  ngOnInit(){
    this.courses = this.courseService.getCourses();

  }
  handleThumbnailClick(courseName){
    toastr.success(courseName)
  }
}