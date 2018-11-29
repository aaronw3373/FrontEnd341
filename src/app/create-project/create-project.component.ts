import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  newProject = {
    name: ''
  }
  user;
  constructor(
    private projectService: ProjectService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUser().subscribe(user => this.user = user);    
  }

  createProject(){    
    this.projectService.createProject(this.newProject.name, this.user.id)
      .subscribe(project => this.newProject = {name: ''});
  }

}
