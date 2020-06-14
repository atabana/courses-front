import { Resolve} from '@angular/router';
import { Injectable } from '@angular/core';
import { CourseService } from './shared/course.service';
import {map} from 'rxjs/operators';

@Injectable()
export class CourseListResolver implements Resolve<any>{

    constructor(private courseService: CourseService){

    }
    resolve(){
       return this.courseService.getCourses()
    }

}