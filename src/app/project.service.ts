import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Project } from './project';
import { Time } from './time';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient,
  ) { }

  // projects: Project[];
  // project: Project;

  private BASEURL = "http://localhost:8888";
  private projecstURL = "/project";
  private timeURL = "/time_entry";
  
  
  ////OLD////
  // mockProjects: Project[] = [
  //   {id: 1,
  //     name: "first mock project"
  //   },
  //   {id: 2,
  //     name: "second mock project"
  //   }
  // ]

  // mockProject: Project = {
  //     id: 3,
  //     name: "third mock project"
  // }

  // mockTimes: Time[] = [
  //   {
  //     id : 1,
  //     project: 1,
  //     user: 1,
  //     startDate: "2018-10-25",
  //     startTime: "08:01",
  //     endDate: "2018-10-25",
  //     endTime: "16:05"
  //   },
  //   {
  //     id : 2,
  //     project: 1,
  //     user: 1,
  //     startDate: "2018-10-26",
  //     startTime: "08:30",
  //     endDate: "2018-10-26",
  //     endTime: "16:30"
  //   },
  // ]

  getProjects(id):Observable<Project[]>{
    const url = this.BASEURL + this.projecstURL + "/" + id + "/all";
    return this.http.get<Project[]>(url).pipe(
      catchError(this.handleError('get all projects', [])),
      tap(res => {
        console.log(res);
        // this.projects = res;
      })
    )
    
    ////OLD////
    // return all projects
    // need user id to do this
    // console.log("Get all projects for this user");
    // return of(this.mockProjects);
  }

  getProject(id):Observable<any>{
    const url = this.BASEURL + this.projecstURL + "/0"  + "/" + id;
    return this.http.get<Project>(url).pipe(
      catchError(this.handleError('get project', [])),
      tap(res => {
        console.log(res);
        // this.project = res[0];
      })
    )
    // get that specific id of a projects
    // console.log("Get: " + id);
    // return of(this.mockProject);
  }

  createProject(newProjectName, userId):Observable<any>{
    const url = this.BASEURL + this.projecstURL + "/0"  + "/" + newProjectName;
    const data = {
      user_id: userId,
      name: newProjectName
    }
    return this.http.post<Project>(url, data).pipe(
      catchError(this.handleError('create project', [])),
      tap(res => {
        console.log(res);
      })
    )
    //create new project
    //get project object back from server
    // console.log("New Project Name: " + newProjectName + " userId: " + userId);
    // return of(this.project);
  }

  deleteProject(id):Observable<any>{
    const url = this.BASEURL + this.projecstURL + "/0"  + "/" + id;
    return this.http.delete<Project>(url).pipe(
      catchError(this.handleError('delete project', [])),
      tap(res => {
        console.log(res);
      })
    )

    // get that specific id of a projects
    // console.log("Deleting: " + id);
    // return of("Sucess");
  }

  updateProject(project: Project, userId):Observable<any>{
    const url = this.BASEURL + this.projecstURL + "/"+ userId  + "/" + project.id;
    const data = {
      project_id: project.id,
      name: project.name
    }
    return this.http.put<Project>(url, data).pipe(
      catchError(this.handleError('update project', [])),
      tap(res => {
        console.log(res);
      })
    )
    // get that specific id of a projects
    // this.mockProject = project;
    // console.log("Updating: " + project.id + " to: " + project.name + " under userId: " + userId);
    // return of(this.mockProject);
  }

  ////////////////////////
  newTime(time):Observable<any>{
    const url = this.BASEURL + this.timeURL + "/0/0/0";
    return this.http.put<Project>(url, time).pipe(
      catchError(this.handleError('update project', [])),
      tap(res => {
        console.log(res);
      })
    )
    //create new time
    // console.log("New Time");
    // return of("Success");
  }

  deleteTime(id:number):Observable<any>{
    const url = this.BASEURL + this.timeURL + "/0/0/" + id;
    return this.http.delete<Project>(url).pipe(
      catchError(this.handleError('update project', [])),
      tap(res => {
        console.log(res);
      })
    )
    //delete time
    // console.log("Delete Time: " + id);
    // return of("Success");
  }

  updateTime(time:Time):Observable<any>{
    const url = this.BASEURL + this.timeURL + "/0/0/0";
    return this.http.put<Project>(url, time).pipe(
      catchError(this.handleError('update project', [])),
      tap(res => {
        console.log(res);
      })
    )
    // update time
    // console.log("update Time: " + time.id);
    // return of("Success");
  }

  getTimes(projectId, userId):Observable<Time[]>{
    const url = this.BASEURL + this.timeURL + "/" + userId + "/" + projectId +"/all";
    return this.http.get<Time[]>(url).pipe(
      catchError(this.handleError('update project', [])),
      tap(res => {
        console.log(res);
      })
    )
    //using project id
    // return of();
  }


  //////////////////////////////////////
  getInvoice(project, user):Observable<String>{
    // using project id and user id
    return of("INVOICE Coming in Hot");
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
