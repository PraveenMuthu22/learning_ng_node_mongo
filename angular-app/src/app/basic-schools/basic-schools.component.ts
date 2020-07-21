import { Component, OnInit } from '@angular/core';
import { ISchool } from '../Interfaces/ISchool';
import { SchoolsService } from '../common/schools.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic-schools',
  templateUrl: './basic-schools.component.html',
  styleUrls: ['./basic-schools.component.css']
})
export class BasicSchoolsComponent implements OnInit {

  
  constructor(private schoolService: SchoolsService) { }

  model: ISchool = {
    _id: '',
    name: '',
    address: '',
    boarding: false,
    studentCount: 0
  };
  submitted = false;

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(this.model);
    // this.schoolService.addSchool(this.model)
    //   .subscribe(
    //     (data: ISchool) => {
    //       this.schoolService.forceUpdate();
    //     },
    //     (err: any) => {
    //       console.log(err);
    //     }
    //   );

    form.resetForm();
    this.submitted = true;
    setTimeout(() => this.submitted = false, 2000);
  }

  ngOnInit() {
  }
}
