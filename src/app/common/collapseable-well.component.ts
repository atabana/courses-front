
import { Component } from '@angular/core';


@Component({
    selector: 'collapseable-well',
    templateUrl: './collapseable-well.component.html'

})


export class CollapsableWellComponent {

    isVisible = true;

    toggleContent() {
        this.isVisible = !this.isVisible;
    }

}
