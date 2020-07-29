import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observer, from, Observable, of, fromEvent, Subscription } from 'rxjs';
import { filter, map, timeout } from 'rxjs/operators';

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

    const currentTime$ = Observable.create(subscriber => {
      const timeString = new Date().toLocaleTimeString();
      subscriber.next(timeString);
      subscriber.complete();
    });

    const subscription: Subscription = currentTime$.subscribe(
      currentTime => console.log(`Observer 1 : ${currentTime}`)
    );
  }
}
