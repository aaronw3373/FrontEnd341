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

  getProjects(id):Observable<Project[]>{
    // return all projects
    // need user id to do this
    console.log("Get all projects for this user");
    return of();
  }

  getProject(id):Observable<Project>{
    // get that specific id of a projects
    console.log("Get: " + id);
    return of();
  }

  createProject(newProject):Observable<Project>{
    //create new project
    //get project object back from server
    console.log("New: " + newProject);
    return of();
  }

  deleteProject(id):Observable<Project>{
    // get that specific id of a projects
    console.log("Deleting: " + id);
    return of();
  }

  updateProject(updatedProject):Observable<Project>{
    // get that specific id of a projects
    console.log("Updating: " + updatedProject);
    return of();
  }

  ////////////////////////
  newTime(time:Time):Observable<Time>{
    return of();
  }

  deleteTime(id:number):Observable<Time>{
    return of();
  }

  updateTime(time:Time):Observable<Time>{
    return of();
  }

  getTime():Observable<Time[]>{
    //using project id
    return of();
  }


  //////////////////////////////////////
  // getInvoice():Observable<>{
  //   // using project id and user id
  //   return of();
  // }


}
