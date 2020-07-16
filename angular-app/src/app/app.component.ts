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
  filteredSchools: ISchool[];
  errorMessage: string;
  searchString: string;

  ngOnInit(): void {
    this.getSchools();
  }

  filterList() {
    this.filteredSchools = this.schools.filter(s => s.name.includes(this.searchString));
  }


  getSchools(): void {
    this.schoolService.getAllSchools().subscribe({
      next: schools => {
        this.schools = schools;
        this.filteredSchools = schools;
      },
      error: err => this.errorMessage = err
    });
  }
}


