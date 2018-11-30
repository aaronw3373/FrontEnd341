import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-view-multiple-projects',
  templateUrl: './view-multiple-projects.component.html',
  styleUrls: ['./view-multiple-projects.component.scss']
})
export class ViewMultipleProjectsComponent implements OnInit {
  projects: Project[];
  user: User;

  constructor(
    private projectService: ProjectService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUser().subscribe(user => 
      {this.user = user;
        this.projectService.getProjects(this.user.user_id).subscribe(projects => this.projects = projects);
       }
    ); 
  };

  delete(id){
    this.projectService.deleteProject(id).subscribe(res => {
      this.ngOnInit();
    });    
  }

}