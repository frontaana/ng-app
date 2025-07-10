import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private status = new BehaviorSubject(false);
  status$ = this.status.pipe(debounceTime(50));

  on(): void {
    this.status.next(true);
  }

  off(): void {
    this.status.next(false);
  }
}
