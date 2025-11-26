import { Injectable, signal } from '@angular/core';
import { Flow } from '../../models/flow.model';

@Injectable({ providedIn: 'root' })
export class FlowsService {
  // keep flows as a signal
  private _flows = signal<Flow[]>([
    { id: 1, title: 'Repeater Flow', type: 'Notifications', tags: [], badge: 'Simple Flow', created: '2025-09-22', archived: false },
    { id: 2, title: 'Уведомления о кликах', type: 'Notifications', tags: ['clicks'], badge: 'Filtering', created: '2025-07-03', archived: false },
    { id: 3, title: 'Send Push after sub', type: 'Notifications', tags: [], badge: 'Simple Flow', created: '2025-03-07', archived: false },
    { id: 4, title: 'Valeriy Z TG', type: 'Notifications', tags: ['tg', 'automation'], badge: 'Filtering', created: '2025-03-06', archived: false },
    { id: 5, title: 'Email Blast', type: 'Email', tags: ['email'], badge: 'Campaign', created: '2025-02-20', archived: true }
  ]);

  get flows() {
    return this._flows;
  }

  // search + filter using service helpers
  searchAndFilter(name: string, tag: string | null) {
    const q = (name || '').trim().toLowerCase();
    return this._flows().filter(f =>
      (!q || f.title.toLowerCase().includes(q)) && (!tag || f.tags.includes(tag))
    );
  }

  // CRUD mocks
  add(f: Flow) {
    const arr = [...this._flows()];
    f.id = Math.max(...arr.map(x => x.id), 0) + 1;
    arr.unshift(f);
    this._flows.set(arr);
  }

  update(id: number, patch: Partial<Flow>) {
    const arr = this._flows().map(f => f.id === id ? { ...f, ...patch } : f);
    this._flows.set(arr);
  }

  delete(id: number) {
    this._flows.set(this._flows().filter(f => f.id !== id));
  }
}
