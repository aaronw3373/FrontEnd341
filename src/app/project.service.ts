import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Project } from './project';
import { Time } from './time';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient,
  ) { }

  projects: Project[];
  project: Project;

  mockProjects: Project[] = [
    {id: 1,
      name: "first mock project"
    },
    {id: 2,
      name: "second mock project"
    }
  ]

  mockProject: Project = {
      id: 3,
      name: "third mock project"
  }

  mockTimes: Time[] = [
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

  getProjects(id):Observable<Project[]>{
    // return all projects
    // need user id to do this
    console.log("Get all projects for this user");
    return of(this.mockProjects);
  }

  getProject(id):Observable<Project>{
    //TODO
    // get that specific id of a projects
    console.log("Get: " + id);
    return of(this.mockProject);
  }

  createProject(newProjectName, userId):Observable<Project>{
    //create new project
    //get project object back from server
    console.log("New Project Name: " + newProjectName + " userId: " + userId);
    return of(this.project);
  }

  deleteProject(id):Observable<String>{
    // get that specific id of a projects
    console.log("Deleting: " + id);
    return of("Sucess");
  }

  updateProject(updatedProjectName, projectId, userId):Observable<Project>{
    // get that specific id of a projects
    this.mockProject.name = updatedProjectName;
    console.log("Updating: " + projectId + " to: " + updatedProjectName + " userId: " + userId);
    return of(this.mockProject);
  }

  ////////////////////////
  newTime(time):Observable<String>{
    //create new time
    return of("Success");
  }

  deleteTime(id:number):Observable<String>{
    //delete time
    return of("Success");
  }

  updateTime(time:Time):Observable<String>{
    // update time
    return of("Success");
  }

  // getTime():Observable<Time[]>{
  //   //using project id
  //   return of();
  // }


  //////////////////////////////////////
  getInvoice(project, user):Observable<String>{
    // using project id and user id
    return of("INVOICE Coming in Hot");
  }


}
