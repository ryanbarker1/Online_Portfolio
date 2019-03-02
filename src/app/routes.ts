import {Routes} from '@angular/router';
import {ProjectsComponent} from './profile/projects.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: 'portfolio/projects', component: ProjectsComponent},
    {path: 'portfolio', component: ProfileComponent},
    {path: '', redirectTo: '/portfolio', pathMatch: 'full'}
]