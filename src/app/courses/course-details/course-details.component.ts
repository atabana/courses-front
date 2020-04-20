import { Component } from '@angular/core';
import { CourseService } from '../shared/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    
    templateUrl: './course-details.component.html',
    styles:[
        `
        .container { padding-left: 20px; padding-right: 20px; }
        .course-image { height: 100px; }
        `
    ]
})

export class CourseDetailsComponent{

    course:any

    constructor(private courseService: CourseService, private route:ActivatedRoute){
    }
  
    ngOnInit(){
      this.course = this.courseService.getCourse(+this.route.snapshot.params['id']);
  
    }

}