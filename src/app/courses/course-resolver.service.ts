import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';
import { CourseService } from './shared/course.service';
import {map} from 'rxjs/operators';

@Injectable()
export class CourseResolver implements Resolve<any>{

    constructor(private courseService: CourseService){

    }
    resolve(route: ActivatedRouteSnapshot){
       return this.courseService.getCourse(route.params['id'])
    }

}