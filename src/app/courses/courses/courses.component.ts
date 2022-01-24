import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['_id','name', 'category'];
  warnning:string = "";

  //coursesService: CoursesService

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog) {
    //this.coursesService = new CoursesService()
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos. Dedey é gay.');
        return of ([])
      })
    );
  }

  onError(errorMsg: string) {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });

    /*
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });*/
  }

  ngOnInit(): void {}
}
