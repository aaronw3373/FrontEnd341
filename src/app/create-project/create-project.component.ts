import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  newProject;
  newId;

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
  }

  createProject(){
    this.projectService.createProject(this.newProject);
  }

}
