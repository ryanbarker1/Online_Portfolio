import { Routes } from '@angular/router';
import { ProjectsComponent } from './profile/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './profile/contact.component';

export const routes: Routes = [
    { path: 'portfolio/projects', component: ProjectsComponent },
    { path: 'portfolio', component: ProfileComponent },
    { path: 'portfolio/contact', component: ContactComponent },
    { path: '', redirectTo: '/portfolio', pathMatch: 'full' }
]