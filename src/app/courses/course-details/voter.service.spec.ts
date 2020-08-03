import { VoterService } from "./voter.service"
import { ISession } from '../shared/course.model'
import { of } from 'rxjs'


describe('VoterService', () => {
    let voterService: VoterService, mockHttp

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp',['delete','post'])
        voterService = new VoterService(mockHttp)
    })
    describe('deleteVoter', () =>{
       it('Should delete voter from voter list', () => {

            var session = { id: 6, voters:["ahmed","zaid"]}
            mockHttp.delete.and.returnValue(of(false))
            voterService.deleteVoter(4,<ISession>session,'ahmed')

            expect(session.voters.length).toBe(1)
            //expect(session.voters[0]).toBe("ahmed")
        })

        it('should call http.delete with the right URL', () => {

            var session = { id: 6, voters:["ahmed","zaid"]}
            mockHttp.delete.and.returnValue(of(false))
            voterService.deleteVoter(4,<ISession>session,'ahmed')
            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/4/sessions/6/voters/ahmed')
        })

    })

    describe('addVoter', () =>{
 
         it('should call http.post with the right params', () => {
 
             var session = { id: 6, voters:["ahmed","zaid"]}
             mockHttp.post.and.returnValue(of(false))
             voterService.addVoter(4,<ISession>session,'ahmed')
             expect(mockHttp.post).toHaveBeenCalledWith('/api/events/4/sessions/6/voters/ahmed',{},jasmine.any(Object))
         })
 
     })

})