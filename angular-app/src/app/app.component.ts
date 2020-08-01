import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observer, Subject, from, Observable, of, interval, fromEvent, Subscription, throwError } from 'rxjs';
import { filter, map, timeout, catchError, take, multicast, refCount, publish, share, publishBehavior, publishLast, publishReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/schools']);

    const source$ = interval(1000).pipe(
      take(4),
      publishReplay(),
      refCount()
    );

    source$.subscribe(value => console.log(`Observer 1: ${value}`));

    setTimeout(() => {
      source$.subscribe(value => console.log(`Observer 2: ${value}`));
    }, 1000);

    setTimeout(() => {
      source$.subscribe(value => console.log(`Observer 3: ${value}`));
    }, 3000);

    setTimeout(() => {
      source$.subscribe(
        value => console.log(`Observer 4: ${value}`),
        error => null,
        () => console.log('Observer 4 completed')
        );
    }, 4500);
  }
}