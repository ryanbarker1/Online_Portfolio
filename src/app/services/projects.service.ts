import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Project} from '../models/project';
import{MY_PROJECTS} from '../models/projects';

@Injectable({
    providedIn: 'root'
})

export class ProjectsService{

    getProject(id: number): Observable<Project>{
        for (let project of MY_PROJECTS){
            if(project.id === id){
                return of(project)
            }
        }
        return of(null)
    }

    getProjects(): Observable<Project[]>{
        return of(MY_PROJECTS)
    }


}