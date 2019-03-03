import {Component, Input} from '@angular/core';
import {Project} from '../models/project';




@Component({
    //selector: 'projects-el',
    templateUrl: './contact.component.html'
})

export class ContactComponent {
    @Input() project: Project
    expanded : boolean = false

    expandedOrShrink(){
        this.expanded = !this.expanded
    }
  

   
}