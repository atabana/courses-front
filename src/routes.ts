import { Routes } from '@angular/router'
import { CoursesListComponent } from './app/courses/courses-list.component';
import { CourseDetailsComponent } from './app/courses/course-details/course-details.component';
import { CreateCourseComponent } from './app/courses/create-course.component';

export const appRoutes:Routes = [
    { path: 'courses/new', component: CreateCourseComponent},
    { path: 'courses', component: CoursesListComponent},
    { path: 'courses/:id', component: CourseDetailsComponent},
    { path: '', redirectTo: '/courses', pathMatch: 'full'}
]