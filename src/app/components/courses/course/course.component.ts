import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {CoursesServices} from "../../services/courses.services";

@Component({
  selector: 'app-course',
  template:`
    <div class="course-container">
      <div class="container-item">
        <div>
          <img [src]="cours.source" width="280" height="280">
        </div>
        <div style="text-align: center;">
          <h1 style="text-align: center;" *ngIf="!editMode">{{cours.title}}</h1>
          <div style="padding: 10px 3rem;outline:none;border:none;" *ngIf="editMode">
          <input type="text" [(ngModel)]="cours.title" >
          </div>
        </div>
        <div class="course-detail">
          <div style="margin: 0 10px"><b>Author: </b>{{cours.author}}</div>
          <div style="margin: 0 10px"><b>Duration: </b>{{cours.duration}} Hour</div>
          <div style="margin: 0 10px"><b>Type: </b><span [ngStyle]="{color:cours.type === 'Free'? 'Green':'Red'}">{{cours.type}}</span></div>
        </div>
        <div style="margin: 0 10px">
          <h2>Price : $ {{cours.price}}</h2>
        </div>
        <div style="margin: 20px 10px">
          <p>{{cours.csDetail}}</p>
        </div>
<!--        <a [routerLink]="['/courses/course/101']">Go to first course</a>-->
<!--        <button [routerLink]="['/courses/course/',cours.id]" [queryParams]="{edit:true}">Edit</button>-->
        <button (click)="apendParamQuery()">Edit</button>
        <button (click)="editMode=false" [routerLink]="['/courses/course/',cours.id]">Update</button>
      </div>

    </div>
  `,
  styles: [`
    .course-container{
      display: grid;
      justify-content: center;
      align-items: center;
      padding: 1rem 2rem;
    }
    .container-item{
      background-color: #a6a6a6;
      width: 100%;
      padding:1rem 3rem;
      border-radius: 4px;
      box-shadow: 0 8px 10px 0 grey;
    }
    div>img{
      display: block;
      margin: 0 auto;
    }
    .course-detail{
      display: flex;
      flex-wrap: wrap;
    }
    button{
      padding: 1rem 2rem;
    }
  `]
})
export class CourseComponent implements OnInit, OnDestroy{
  cours;
  courseId:any;
  routerParamObs;
  editMode:boolean =false;
  constructor(private activateRouter: ActivatedRoute,private serviceCourses: CoursesServices,
              private route:Router) {
  }
  apendParamQuery(){
    this.route.navigate(['/courses/course/', this.courseId],{queryParams:{edit:true}});
  }
  ngOnInit():void {
    // this.courseId = this.activateRouter.snapshot.paramMap.get('id');
    // this.cours = this.serviceCourses.course.find(x => x.id == this.courseId);
    this.routerParamObs = this.activateRouter.paramMap.subscribe((param)=>{
      this.courseId = param.get('id');
      this.cours = this.serviceCourses.course.find(x => x.id == this.courseId);
    })

    // this.editMode = this.activateRouter.snapshot.queryParams.get('edit');
    this.activateRouter.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get('edit'));
    })
    console.log(this.editMode);
  }
  ngOnDestroy() {
    this.routerParamObs.unsubscribe();
  }
}
