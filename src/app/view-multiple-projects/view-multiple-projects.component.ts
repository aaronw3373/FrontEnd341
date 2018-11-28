import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-view-multiple-projects',
  templateUrl: './view-multiple-projects.component.html',
  styleUrls: ['./view-multiple-projects.component.scss']
})
export class ViewMultipleProjectsComponent implements OnInit {
  projects: Project[];
  id;
  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    // Fetch all projects that have my user id as a match
    // set id from the current user.

    this.projectService.getProjects(this.id)
      .subscribe(projects => this.projects = projects);
  }

  delete(id){
    this.projectService.deleteProject(id);
  }

}