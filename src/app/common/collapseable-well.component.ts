
import { Component } from '@angular/core';


@Component({
    selector: 'collapseable-well',
    templateUrl: './collapseable-well.component.html'

})


export class CollapsableWellComponent {

    isVisible: boolean = true

    toggleContent(){
        this.isVisible = !this.isVisible
    }

}