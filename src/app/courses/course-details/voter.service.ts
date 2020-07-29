import { Injectable } from '@angular/core';
import { ISession } from '../shared/course.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of} from 'rxjs';

@Injectable()
export class VoterService{

    constructor(private http: HttpClient){

    }

    deleteVoter(courseId: number, session: ISession, voterName: string){
        //console.log('delete voter before: ' + session.voters)
        session.voters = session.voters.filter( voter => voter !== voterName)
        const url = `/api/events/${courseId}/sessions/${session.id}/voters/${voterName}`
        this.http.delete(url)
            .pipe(catchError(this.handleError('deleteVoter')))
            .subscribe()
    }

    addVoter(courseId: number, session: ISession, voterName: string){
        session.voters.push(voterName)
        const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
        const url = `/api/events/${courseId}/sessions/${session.id}/voters/${voterName}`
        this.http.post(url,{},options)
            .pipe(catchError(this.handleError('addVoter')))
            .subscribe()
    }

    userHasVoted(session: ISession, voterName: string){

        //console.log('inside userHasVoted: voterName = ' + voterName)
        //console.log('voters: ' + session.voters)
        //console.log('userHasVoted: voterName = ' + voterName +' returns ' + session.voters.some(voter => voter === voterName))
        return session.voters.some(voter => voter === voterName)
    }

    private handleError<T> (operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
          console.error(error)
          return of(result as T)
        }
    }
    


}