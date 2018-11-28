import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CreateProjectComponent} from './create-project/create-project.component';
import { ViewMultipleProjectsComponent } from './view-multiple-projects/view-multiple-projects.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'create', component: CreateProjectComponent},
  { path: 'projects', component: ViewMultipleProjectsComponent},
  { path: 'project/:id', component: ViewProjectComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
