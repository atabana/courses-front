import { Component } from '@angular/core';
import { CourseService } from '../shared/course.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ICourse, ISession } from '../shared/course.model';

@Component({

    templateUrl: './course-details.component.html',
    styles: [
        `
        .container { padding-left: 20px; padding-right: 20px; }
        .course-image { height: 100px; }
        a {cursor:pointer}
        `
    ]
})

export class CourseDetailsComponent {
    addMode: boolean;
    course: ICourse;
    filterBy = 'all';
    sortBy = 'votes';

    constructor(private courseService: CourseService, private route: ActivatedRoute) {
    }

    ngOnInit() {
      this.route.data.forEach((data) => {
        this.course = data.course;
        this.addMode = false;

      });

    }
    addSession() {
        this.addMode = true;
    }
    saveNewSession(session) {
        const nextId = Math.max.apply(null, this.course.sessions.map( s => s.id ));
        session.id = nextId + 1;
        this.course.sessions.push(session);
        this.courseService.saveCourse(this.course).subscribe();
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }

}
