import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observer, from, Observable, of, fromEvent, Subscription } from 'rxjs';
import { filter, map, timeout, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/schools'])

    const currentTime$ = Observable.create(subscriber => {
      const numbers = [1, 2, 3, 4, 5, 7, 9, 13, 16, 21];

      numbers.forEach(number => {
        if (number % 2 !== 0) {
          subscriber.next(number);
        } else {
          subscriber.error(number);
        }
      });
      subscriber.complete();
    });

    const subscription: Subscription = currentTime$
      // .pipe(
      //   catchError(err => of([0]))
      // )
      .subscribe(
        value => console.log(`Observer : ${value}`),
        error => console.log(`Observer Error : ${error}`)
      );
  }
}
