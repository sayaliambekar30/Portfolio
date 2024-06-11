import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { ProjectsComponent } from './layout/projects/projects.component';
import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { ExpeComponent } from './layout/expe/expe.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    ProfileComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    ExpeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
