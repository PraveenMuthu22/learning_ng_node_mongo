import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SchoolDetailsComponent } from './school-details/school-details.component';
import { RouterModule } from '@angular/router';
import { SchoolsComponent } from './schools/schools.component';
import { AddSchoolComponent } from './add-school/add-school.component';
import { BasicSchoolsComponent } from './basic-schools/basic-schools.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolDetailsComponent,
    SchoolsComponent,
    AddSchoolComponent,
    BasicSchoolsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'schools', component: SchoolsComponent},
      {path: 'schools/:id', component: SchoolDetailsComponent},
      {path: '', redirectTo: 'schools', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
