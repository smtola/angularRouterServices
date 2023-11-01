import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { CourseComponent } from './components/courses/course/course.component';
import { RouterModule } from '@angular/router';
import { CoursesServices } from './components/services/courses.services';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    HeaderComponent,
    ErrorComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [CoursesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
