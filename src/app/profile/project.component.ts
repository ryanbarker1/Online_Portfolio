import {Component, Input} from '@angular/core';
import {Project} from '../models/project';
import { ProjectsService } from '../services/projects.service';



@Component({
    selector: 'projects-el',
    templateUrl: './project.component.html'
})

export class ProjectComponent {
    @Input() project: Project
  

   
}
