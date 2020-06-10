import { Injectable } from '@angular/core'
import {IUser} from './user.model'

@Injectable()
export class AuthService{
    public currentUser: IUser
    loginUser(userName: string, password: string){
        console.log('loginUser(' + userName + ',' + password +')')
        this.currentUser = {
            id: 1, 
            userName: userName, 
            firstName: 'Ahmed',
            lastName: 'Ibraheem'
        }
        console.log('logged in user:' + this.currentUser.userName)
    }
    isAuthenticated(){
        return !!this.currentUser;
    }
    updateCurrentUser(firstName: string, lastName: string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}
