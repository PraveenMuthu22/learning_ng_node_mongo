import { Component, OnInit } from '@angular/core';
import { ISchool } from '../Interfaces/ISchool';
import { SchoolsService } from '../common/schools.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})

export class SchoolsComponent implements OnInit {

  title = 'angular-app';

  constructor(private schoolService: SchoolsService) { }

  schools: ISchool[];
  filteredSchools: ISchool[];
  errorMessage: string;
  searchString: string;

  ngOnInit(): void {
    this.getSchools();

    this.schoolService.listenForUpdates().subscribe(() => {
      setTimeout(() => this.getSchools(), 500);
    });
  }

  filterList() {
    this.filteredSchools = this.schools.filter(s => s.name.toLowerCase().includes(this.searchString.toLowerCase()));
  }

  getSchools(): void {
    this.schoolService.getAllSchools().subscribe({
      next: schools => {
        this.schools = schools;
        this.filteredSchools = schools;
        console.log(this.filteredSchools);
      },
      error: err => this.errorMessage = err
    });
  }

}
