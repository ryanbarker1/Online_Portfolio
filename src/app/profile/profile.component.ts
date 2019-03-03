import {Component, OnInit} from '@angular/core';
import {Project} from '../models/project';
import { ProjectsService } from '../services/projects.service';



@Component({
    //selector: 'projects-el',
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit{
    constructor(private projectsService : ProjectsService){}
    projects : Project[] = []

    ngOnInit() : void {
        this.projectsService.getProjects().subscribe(data => this.projects = data)
    }

  
}