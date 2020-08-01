import { Component } from '@angular/core';
import { of, queueScheduler, asapScheduler, asyncScheduler, merge, from } from 'rxjs';
import { observeOn, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  ngOnInit(): void {

    console.log('Start script');

    from([1, 2, 3, 4], queueScheduler)
    .pipe(
      tap(value => console.log(`Value: ${value}`)),
      observeOn(asyncScheduler),
      tap(value => console.log(`Value Doubled: ${value * 2}`))
    ).subscribe();


    console.log('End script');
  }
}