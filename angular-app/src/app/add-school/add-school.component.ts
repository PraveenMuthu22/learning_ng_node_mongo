import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../common/schools.service';
import { ISchool } from '../Interfaces/ISchool';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {

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
    this.schoolService.addSchool(this.model)
      .subscribe(
        (data: ISchool) => {
          this.schoolService.forceUpdate();
        },
        (err: any) => {
          console.log(err);
        }
      );

    form.resetForm();
    this.submitted = true;
    setTimeout(() => this.submitted = false, 2000);
  }

  ngOnInit() {
  }

}
