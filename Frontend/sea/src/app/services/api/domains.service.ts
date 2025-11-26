import { Injectable, signal } from '@angular/core';
import { Domain } from '../../models/domain.model';

@Injectable({ providedIn: 'root' })
export class DomainsService {
  private _domains = signal<Domain[]>([
    { id: 34860, domain: 'hahahahhaha-test.com', monitoring: true, price: '$0.00', provider: 'No Domain Provider', customSsl: false },
    { id: 31810, domain: 'tenetur-labore.fugiat-quas-asperiores.top', monitoring: true, price: '$0.00', provider: 'lakeishanegumabik@gmail.com', customSsl: true, sslExpire: '2025-10-14' },
    { id: 31655, domain: 'nulla-omnis.fugiat-quas-asperiores.top', monitoring: true, price: '$0.00', provider: 'lakeishanegumabik@gmail.com', customSsl: true, sslExpire: '2025-10-14' },
    { id: 31447, domain: 'nemo-quia.fugiat-quas-asperiores.top', monitoring: true, price: '$0.00', provider: 'lakeishanegumabik@gmail.com', customSsl: true, sslExpire: '2025-10-14' },
    { id: 3906, domain: 'omnis-ducimus.unde-consectetur-unde.top', monitoring: true, price: '$0.00', provider: 'example@provider.com', customSsl: false, sslExpire: '2025-10-28' }
  ]);

  get domains() {
    return this._domains;
  }

  // support add/remove/update for demo purposes
  add(d: Domain) {
    const arr = [...this._domains()];
    d.id = Math.max(...arr.map(x => x.id), 0) + 1;
    arr.unshift(d);
    this._domains.set(arr);
  }

  update(id: number, patch: Partial<Domain>) {
    const arr = this._domains().map(row => row.id === id ? { ...row, ...patch } : row);
    this._domains.set(arr);
  }

  delete(id: number) {
    this._domains.set(this._domains().filter(r => r.id !== id));
  }
}
