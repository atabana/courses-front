import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { CourseService } from '../courses/shared/course.service';
import { ISession, ICourse } from '../courses/shared/course.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    li > a.active {color : #F97924;}
  `]


})
export class NavBarComponent implements OnInit {

  searchTerm = '';
  foundSessions: ISession[];
  courses: ICourse[];

  constructor(public auth: AuthService, private courseService: CourseService) {

  }

  ngOnInit() {
    this.getCourses();
  }
  searchSessions(searchTerm) {

    this.courseService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
        console.log(this.foundSessions);
        }
    );

  }
  getCourses() {
    this.courseService.getCourses()
          .subscribe(
              courses => {
                this.courses = courses;
              });
  }
}
