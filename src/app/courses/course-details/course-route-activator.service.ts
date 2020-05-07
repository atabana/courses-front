import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { CourseService } from '../shared/course.service';

@Injectable()
export class CourseRouteActivator implements CanActivate{
    constructor(private courseService: CourseService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot){
       const eventExists = !!this.courseService.getCourse(+route.params['id'])
       if(!eventExists){
        this.router.navigate(['/404'])
        }   
        return eventExists
    }
}