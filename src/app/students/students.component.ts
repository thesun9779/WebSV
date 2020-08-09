import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';
import { Student } from '../models/Student';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  public students: Student[] = [];

  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.serverHttp.getStudents().subscribe((data) => {
      console.log('getStudents', data);
      this.students = data;
      this.common.setTotalStudents(data.length);
    });
  }

  public addStudent() {
    this.router.navigate(['student-form', 0]);
  }

  public deleteStudent(studentId) {
    this.serverHttp.deleteStudent(studentId).subscribe((data) => {
      console.log('delete', data);
      this.loadData();
    });
  }

  public editStudent(studentId) {
    this.router.navigate(['student-form', studentId]);
  }

  public sortByCode(dir) {
    if (dir === 'up') {
      this.students = _.orderBy(this.students, ['code'], ['desc']);
    } else {
      this.students = _.orderBy(this.students, ['code'], ['asc']);
    }
  }
}
