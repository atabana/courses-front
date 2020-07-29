import { Component, OnInit} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { ToastrService } from '../common/toastr.service'

@Component({
  templateUrl: './profile.component.html',
  styles: [`
  em { float:right; color:#E05C65; padding-left: 10px}
  .error input {background-color: #E3C3C5}
  `]
})
export class ProfileComponent implements OnInit{
    profileForm: FormGroup
    firstName: FormControl
    lastName: FormControl
    constructor(private auth: AuthService, private router: Router ,private toastr: ToastrService){

    }
    ngOnInit(){
         this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required,Validators.pattern('[a-zA-Z].*')])
         this.lastName = new FormControl(this.auth.currentUser.lastName, [Validators.required,Validators.pattern('[a-zA-Z].*')])

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
    }

    cancel(){
        this.router.navigate(['courses'])
    }
       
    saveProfile(formValues){
        if(this.profileForm.valid){
            this.auth.updateCurrentUser(formValues.firstName,formValues.lastName)
                .subscribe( () => {
                    this.toastr.success('Profile Saved')
                })
        }

    }

    validateLastName(){
        return this.lastName.valid || this.profileForm.controls.lastName.untouched
    }

    validateFirstName(){
       return this.firstName.valid || this.profileForm.controls.firstName.untouched
    }
}