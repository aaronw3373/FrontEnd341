import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {
  updatedProject = {
    name: ''
  }
  project;
  user;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUser().subscribe(user => this.user = user); 
    this.getProject();
  }

  getProject(): void{
    const id = + this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
  }

  updateProject(): void{
    this.projectService.updateProject(this.updatedProject.name, this.user.id)
    .subscribe(project => this.project = project);
  }


  newTime(): void{
  }

  deleteTime(): void{
  }

  updateTime(): void{
  }

  getTime():void{
    //using project id
  }

  getInvoice():void{
    // using project id and user id
  }


}
