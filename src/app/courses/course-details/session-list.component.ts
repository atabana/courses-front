import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/course.model';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';


@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html',

})

export class SessionListComponent implements OnChanges {

@Input() sortBy: string;
@Input() filterBy: string;
@Input() sessions: ISession[];
@Input() courseId: number;

visibleSessions: ISession[] = [];

constructor(public auth: AuthService, private voterService: VoterService) {

}

ngOnChanges() {
    if (this.sessions) {
        this.filterSessions(this.filterBy);
        this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }
}
filterSessions(filter) {
    if (filter === 'all') {
        this.visibleSessions = this.sessions.slice(0);
    } else {
        this.visibleSessions = this.sessions.filter( session => {
            return session.level.toLocaleLowerCase() === filter;
        });
    }
}

toggleVote(session: ISession) {
    console.log('toggleVote' + this.userHasVoted(session));
    if (this.userHasVoted(session)) {
        console.log('deleteVoter');
        this.voterService.deleteVoter(this.courseId, session, this.auth.currentUser.userName);
    } else {
        console.log('addVoter');
        this.voterService.addVoter(this.courseId, session, this.auth.currentUser.userName);
    }
    if (this.sortBy === 'votes') {
        this.visibleSessions.sort(sortByVotesDesc);
    }


}

userHasVoted(session: ISession) {
    // console.log('userName: ' + this.auth.currentUser.userName)
    // console.log('userHasVoted:' + this.voterService.userHasVoted(session, this.auth.currentUser.userName))
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);

}

}

function sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) { return 1; } else if (s1.name === s2.name ) { return 0; } else { return -1; }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;

}

