import { Routes } from '@angular/router'
import { CoursesListComponent } from './app/courses/courses-list.component';
import { CourseDetailsComponent } from './app/courses/course-details/course-details.component';

export const appRoutes:Routes = [
    { path: 'courses', component: CoursesListComponent},
    { path: 'courses/:id', component: CourseDetailsComponent},
    { path: '', redirectTo: '/courses', pathMatch: 'full'}
]