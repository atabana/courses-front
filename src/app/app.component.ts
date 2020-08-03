import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string
constructor(private auth: AuthService){
  this.title='courses-front'
}
ngOnInit(){
  this.auth.checkAuthenticationStatus()
}
}
