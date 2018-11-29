import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';
import { UserService } from '../user.service';

import { Time } from '../time';
import { Project } from '../project';
import { User } from '../user';


@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {
  updatedProject = {
    name: ''
  }
  project: Project;
  user: User;

  newTime = {
    project: null,
    user: null,
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
  }

  times: Time[] = [
    {
      id : 1,
      project: 1,
      user: 1,
      startDate: "2018-10-25",
      startTime: "08:01",
      endDate: "2018-10-25",
      endTime: "16:05"
    },
    {
      id : 2,
      project: 1,
      user: 1,
      startDate: "2018-10-26",
      startTime: "08:30",
      endDate: "2018-10-26",
      endTime: "16:30"
    },
  ]


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
    this.projectService.updateProject(this.updatedProject.name, this.project.id, this.user.id)
    .subscribe(project => this.project = project);
  }


  addNewTime(): void{
    this.newTime.project = this.project.id;
    this.newTime.user = this.user.id
    this.projectService.newTime(this.newTime)
    .subscribe(res => {
      this.getProject();
    })
  }

  deleteTime(timeObj:Time): void{
    this.projectService.deleteTime(timeObj.id)
    .subscribe(res => {
      this.getProject();
    })
  }

  updateTime(timeObj:Time): void{
    this.projectService.updateTime(timeObj)
    .subscribe(res => {
      this.getProject();
    })
  }

  // getTime():void{
  //   //using project id
  // }

  creatInvoice():void{
    // using project id and user id
    this.projectService.getInvoice(this.project.id, this.user.id)
    .subscribe(res => {
      console.log(res);
    })
  }


}
