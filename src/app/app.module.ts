import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ViewMultipleProjectsComponent } from './view-multiple-projects/view-multiple-projects.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProjectComponent,
    ViewMultipleProjectsComponent,
    ViewProjectComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
