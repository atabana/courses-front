import { Routes } from '@angular/router'
import { CoursesListComponent } from './app/courses/courses-list.component';
import { CourseDetailsComponent } from './app/courses/course-details/course-details.component';
import { CreateCourseComponent } from './app/courses/create-course.component';
import { Error404Component } from './app/errors/error-404.component';
import { CourseRouteActivator } from './app/courses/course-details/course-route-activator.service';
import { CourseListResolver } from './app/courses/course-list-resolver.service';

export const appRoutes:Routes = [
    { path: 'courses/new', component: CreateCourseComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'courses', component: CoursesListComponent, 
        resolve: {courses: CourseListResolver}
    },
    { path: 'courses/:id', component: CourseDetailsComponent,
        canActivate: [CourseRouteActivator]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/courses', pathMatch: 'full'}
]