import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observer, from, Observable, of, fromEvent, Subscription, throwError } from 'rxjs';
import { filter, map, timeout, catchError, take } from 'rxjs/operators';

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

    const source$ = of(1, 2, 3, 4, 5);

    function multiply(multiplier) {
      return map(val => val * multiplier);
    }

    source$
      .pipe(
        multiply(2)
      )
      .subscribe(
        value => console.log(`Observer : ${value}`),
      );
  }
}
