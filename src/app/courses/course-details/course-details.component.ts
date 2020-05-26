import { Component } from '@angular/core';
import { CourseService } from '../shared/course.service';
import { ActivatedRoute } from '@angular/router';
import { ICourse, ISession } from '../shared/course.model';

@Component({
    
    templateUrl: './course-details.component.html',
    styles:[
        `
        .container { padding-left: 20px; padding-right: 20px; }
        .course-image { height: 100px; }
        a {cursor:pointer}
        `
    ]
})

export class CourseDetailsComponent{
    addMode: boolean 
    course:ICourse
    filterBy: string = 'all';
    sortBy: string = 'votes'
    
    constructor(private courseService: CourseService, private route:ActivatedRoute){
    }
  
    ngOnInit(){
      this.course = this.courseService.getCourse(+this.route.snapshot.params['id']);
  
    }
    addSession(){
        this.addMode = true
    }
    saveNewSession(session){
        const nextId = Math.max.apply(null, this.course.sessions.map( s => s.id ))
        session.id = nextId + 1 
        this.course.sessions.push(session)
        this.courseService.updateCourse(this.course)
        this.addMode = false
    }

    cancelAddSession(){
        this.addMode = false
    }

}