import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../common/schools.service';
import { ISchool } from '../Interfaces/ISchool';

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
    address: { street: '', suburb: '', postcode: '', state: '' },
    studentCount: 0
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.schoolService.addSchool(this.model)
      .subscribe(
        (data: ISchool) => console.log(data),
        (err: any) => console.log(err)
      );

    //reset
    this.model = {
      _id: '',
      name: '',
      address: { street: '', suburb: '', postcode: '', state: '' },
      studentCount: 0
    };
  }

  ngOnInit() {
  }

}
