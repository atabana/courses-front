import { Component , Input} from '@angular/core';
import { ICourse } from './shared/course.model';

@Component({
  selector: 'course-thumbnail',
  template: `

  <div [routerLink]="['/courses', course.id]" class="well hoverwell thumbnail">
  <h2>{{course?.name | uppercase}}</h2>
  <div>Date: {{course?.date | date}}</div>
  <div>Price: {{course?.price | currency: 'USD'}}</div>
  <div>Location: {{course?.location?.city}} - {{course?.location?.country}}</div>
  </div>

  `
})
export class CourseThumbnailComponent {
    @Input() course: ICourse;

}
