import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../common/schools.service';
import { ISchool } from '../Interfaces/ISchool';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css']
})
export class SchoolDetailsComponent implements OnInit {

  constructor(private schoolService: SchoolsService, private route: ActivatedRoute) { }

  school: ISchool;
  errorMessage: string;

  ngOnInit() {
    const id = this.route.snapshot.url[1].path;
    this.schoolService.getSchoolById(id).subscribe({
      next: school => this.school = school,
      error: err => this.errorMessage = err
    });
  }

}
