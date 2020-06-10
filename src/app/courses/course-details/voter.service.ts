import { Injectable } from '@angular/core';
import { ISession } from '../shared/course.model';

@Injectable()
export class VoterService{

    deleteVoter(session: ISession, voterName: string){
        //console.log('delete voter before: ' + session.voters)
        session.voters = session.voters.filter( voter => voter !== voterName)
        //console.log('delete voter after: ' + session.voters)

    }

    addVoter(session: ISession, voterName: string){
        session.voters.push(voterName)
    }

    userHasVoted(session: ISession, voterName: string){

        //console.log('inside userHasVoted: voterName = ' + voterName)
        //console.log('voters: ' + session.voters)
        //console.log('userHasVoted: voterName = ' + voterName +' returns ' + session.voters.some(voter => voter === voterName))
        return session.voters.some(voter => voter === voterName)
    }
    


}