import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { CourseService } from '../courses/shared/course.service';
import { ISession } from '../courses/shared/course.model';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    li > a.active {color : #F97924;}
  `]
  

})
export class NavBarComponent {

  searchTerm: string =""
  foundSessions: ISession[]

  constructor(public auth:AuthService, private courseService:CourseService){
    
  }
  searchSessions(searchTerm){
    
    this.courseService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions
        console.log(this.foundSessions)
        }
    )
    
  }
}
