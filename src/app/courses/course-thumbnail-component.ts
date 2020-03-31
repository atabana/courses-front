import { Component , Input} from '@angular/core';

@Component({
  selector: 'course-thumbnail',
  template: `

  <div class="well hoverwell thumbnail">
  <h2>{{course.name}}</h2>
  <div>Date: {{course.date}}</div>
  <div>Price: \${{course.price}}</div>
  <div>Location: {{course.location.city}} - {{course.location.country}}</div>
  </div>
  
  `
})
export class CourseThumbnailComponent{
    @Input() course: any

}