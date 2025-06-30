import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeavyTaskWorkerService {

  run(input: number): Observable<number> {
    return new Observable<number>((observer) => {
      if (typeof Worker !== 'undefined') {
        const worker = new Worker(
          new URL('../core/workers/heavy-task.worker', import.meta.url),
          { type: 'module' }
        );

        worker.onmessage = ({ data }) => {
          observer.next(data);
          observer.complete();
          worker.terminate();
        };

        worker.onerror = (err) => {
          observer.error(err);
          worker.terminate();
        };

        worker.postMessage(input);
      } else {
        observer.error('Web Workers not supported in this environment.');
      }
    });
  }
}
