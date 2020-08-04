import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/course.model';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from '../shared/duration.pipe';
import { CollapsableWellComponent } from 'src/app/common/collapseable-well.component';


describe('SessionListComponent', () => {

    let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement;


    beforeEach(async(() => {
        const mockVoterService = {
            userHasVoted: () => true
        };
        const mockAuthService = {
            isAuthenticated: () => true,
            currentUser: {username: 'ahmed'}

        };

        TestBed.configureTestingModule({

            imports: [],
            declarations: [
                SessionListComponent,
                UpvoteComponent,
                DurationPipe,
                CollapsableWellComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService},
                { provide: VoterService, useValue: mockVoterService}
            ],
            schemas: []
        });

    }));

    beforeEach( () => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        debugEl = fixture.debugElement;

    });
    describe('intial display', () => {

        it('should have the correct session name', () => {
            component.sessions = [{ id: 4, name: 'session 1', presenter: 'joe', duration: 4, level: 'beginner', abstract: 'hello',
            voters: ['ahmed', 'zaid']}];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.courseId = 4;

            component.ngOnChanges();
            fixture.detectChanges();

           // expect(element.querySelector('[well-title]').textContent).toContain('session 1')
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('session 1');

        });

    });


});
