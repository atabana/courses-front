import { Component } from '@angular/core';

@Component({
  selector: 'courses-list',
  template: `
  <div>
    <h1>Upcoming Courses</h1>
    <hr/>
    <course-thumbnail [course]="course1"></course-thumbnail>



  <div>
  `
})
export class CoursesListComponent{

    course1 = {
        id: 1, 
        name: 'Angular 2', 
        date: '29-03-2020',
        price: 20,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '102 Rue Barcelone',
            city: 'Montreal',
            country: 'Canada'
        }
    }

}