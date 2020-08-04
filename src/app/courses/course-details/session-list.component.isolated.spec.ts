import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/course.model';


describe('SessionListComponent', () => {

    let sessionListComponent: SessionListComponent;
    let mockVoterService, mockAuthService;

    beforeEach(() => {

        // mockHttp = jasmine.createSpyObj('mockHttp',['delete','post'])
        sessionListComponent = new SessionListComponent(mockAuthService, mockVoterService);
    });
    describe('ngOnChanges', () => {

        it('should filter sessions', () => {

            sessionListComponent.sessions = [{ name: 'course 1', level: 'beginner'},
            { name: 'course 2', level: 'beginner'},
            { name: 'course 3', level: 'intermediate'}] as ISession[];

            sessionListComponent.filterBy = 'intermediate';
            sessionListComponent.sortBy = 'name';
            sessionListComponent.ngOnChanges();


            expect(sessionListComponent.visibleSessions.length).toBe(1);
            // expect(session.voters[0]).toBe("ahmed")
        });
        it('should sort sessions', () => {
            // arrange
            sessionListComponent.sessions = [{ name: 'course 2', level: 'beginner'},
            { name: 'course 1', level: 'beginner'},
            { name: 'course 3', level: 'intermediate'}] as ISession[];

            sessionListComponent.filterBy = 'beginner';
            sessionListComponent.sortBy = 'name';

            // act
            sessionListComponent.ngOnChanges();

            // assert
            expect(sessionListComponent.visibleSessions.length).toBe(2);
            expect(sessionListComponent.visibleSessions[0].name).toBe('course 1');

            // expect(session.voters[0]).toBe("ahmed")
        });



    });


});
