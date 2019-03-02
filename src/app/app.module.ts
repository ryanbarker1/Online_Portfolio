import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProjectsComponent} from './profile/projects.component';
import {routes} from './routes';
import {RouterModule} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './profile/project.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProfileComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
