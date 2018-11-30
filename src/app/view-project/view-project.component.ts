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
  project: Project;
  user: User;
  times: Time[];
  totalHours: number = -1; 

  newTime = {
    project_id: null,
    user_id: null,
    start_time: '',
    end_time: '',
  }
  invoice = {
    start: '',
    end: '',
  }

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
      .subscribe(project => 
        {
          this.project = project[0]
          this.getTimes();
        }      
      );
  }

  updateProject(): void{
    this.projectService.updateProject(this.project, this.user.user_id)
    .subscribe(project =>  {
      this.getProject();
    });
  }


  addNewTime(): void{
    this.newTime.project_id = this.project.project_id;
    this.newTime.user_id = this.user.user_id
    console.log(this.newTime);
    this.projectService.newTime(this.newTime)
    .subscribe(res => {
      this.getProject();
    })
  }

  deleteTime(timeObj:Time): void{
    this.projectService.deleteTime(timeObj.entry_id)
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

  getTimes():void{
    this.projectService.getTimes(this.project.project_id, this.user.user_id)
    .subscribe(res => {
      this.times = res
      this.times.forEach(time => {
        time.start_time = time.start_time.slice(0,-8);
        time.end_time = time.end_time.slice(0, -8);
      });
    })
  }

  creatInvoice():void{
    // using project id and user id
    this.projectService.getInvoice(this.project.project_id, this.user.user_id, this.invoice.start, this.invoice.end)
    .subscribe(res => {
      console.log(res);
      this.totalHours = res;
    })
  }


}
