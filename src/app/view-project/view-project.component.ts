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

  newTime = {
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
  }

  times = [
    {
      startDate: "2018-10-25",
      startTime: "08:01",
      endDate: "2018-10-25",
      endTime: "16:05"
    },
    {
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
    this.projectService.updateProject(this.updatedProject.name, this.user.id)
    .subscribe(project => this.project = project);
  }


  addNewTime(): void{
    console.log(this.newTime)
  }

  deleteTime(timeObj): void{
  }

  updateTime(timeObj): void{
  }

  // getTime():void{
  //   //using project id
  // }

  creatInvoice():void{
    // using project id and user id
  }


}
