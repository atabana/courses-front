import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from './shared/course.service';

@Component({
    templateUrl: './create-course.component.html',
    styles: [`
    em { float:right; color:#E05C65; padding-left: 10px}
    .error input {background-color: #E3C3C5}
    `]
})
export class CreateCourseComponent{
    newCourse
    isDirty: boolean = true; 
    constructor(private router: Router, private courseService: CourseService){

    }
    cancel(){
        this.router.navigate(['/courses'])
    }

    saveCourse(formValues){
        this.courseService.saveCourse(formValues).subscribe( () => {
            this.isDirty = false
            this.router.navigate(['/courses'])
        })
    }
}