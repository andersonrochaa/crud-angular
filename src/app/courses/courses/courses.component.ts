import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];
  warnning:string = "";

  //coursesService: CoursesService

  constructor(private coursesService: CoursesService) {
    //this.coursesService = new CoursesService()
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        console.log(error)
        this.warnning = error.statusText
        return of ([])
      })
    );
  }

  ngOnInit(): void {}
}
