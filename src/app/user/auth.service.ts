import { Injectable } from '@angular/core';
import {IUser} from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
    public currentUser: IUser;

    constructor(private http: HttpClient) {

    }
    loginUser(userName: string, password: string) {

        const url = '/api/login';
        const loginInfo = {username : userName, password};
        const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.post(url, loginInfo, options)
            .pipe(tap( data => {
                this.currentUser = <IUser> data
            }))
            .pipe(catchError( err => {
                return of(false);
            }));
    }

    logout() {
        this.currentUser = undefined;
        const url = '/api/logout';
        const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.post(url, {}, options);
    }
    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        const url = '/api/currentIdentity';
        this.http.get(url)
        .pipe(tap( data => {
            if (data instanceof Object) {
                this.currentUser = <IUser> data
            }
        }))
        .subscribe();

    }
    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        const url = `/api/users/${this.currentUser.id}`;
        const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

        return this.http.put(url, this.currentUser, options);
    }
}
