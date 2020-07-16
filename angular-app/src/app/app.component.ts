import { Component } from '@angular/core';
import { SchoolsService } from './common/schools.service';
import { ISchool } from './Interfaces/ISchool';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  constructor(private schoolService: SchoolsService) { }

  schools: ISchool[];
  errorMessage: string;

  ngOnInit(): void {
    this.getSchools();
  }

  getSchools(): void {
    this.schoolService.getAllSchools().subscribe({
      next: schools => this.schools = schools,
      error: err => this.errorMessage = err
    });
  }
}
