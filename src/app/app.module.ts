import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth/auth.component';
import { MainSystemComponent } from './main-system/main-system.component';
import { SideBarComponent } from './main-system/side-bar/side-bar.component';
import { WorkspaceComponent } from './main-system/workspace/workspace.component';
import { DaysComponent } from './main-system/workspace/days/days.component';
import { DayComponent } from './main-system/workspace/days/day/day.component';
import { ProjectsComponent } from './main-system/workspace/days/day/projects/projects.component';
import { ProjectComponent } from './main-system/workspace/days/day/projects/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainSystemComponent,
    SideBarComponent,
    WorkspaceComponent,
    DaysComponent,
    DayComponent,
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
