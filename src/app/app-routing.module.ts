import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/courses/course/course.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'courses',component:CoursesComponent},
  {path:'courses/course/:id',component:CourseComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
