import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './create-course.component.html'

})
export class CreateCourseComponent{
    constructor(private router: Router){

    }
    cancel(){
        this.router.navigate(['/courses'])
    }
}