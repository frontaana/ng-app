import { Component, signal, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Flow } from '../../../../models/flow.model';
import { FlowsService } from '../../../../services/api/flows.service';
import { ModalComponent } from '../../../../shared/modal/modal.component';

@Component({
  selector: 'ng-app-flows',
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ModalComponent
  ],
  templateUrl: './flows.component.html',
  styleUrls: ['./flows.component.scss']
})
export class FlowsComponent {
  private flowsService = inject(FlowsService);

  // UI signals
  search = signal('');
  selectedTag = signal<string | null>(null);
  showCreateModal = signal(false);

  // data derived
  tags = computed(() => {
    const all = this.flowsService.flows();
    const set = new Set<string>();
    all.forEach(f => (f.tags || []).forEach(t => set.add(t)));
    return Array.from(set);
  });

  filtered = computed<Flow[]>(() => {
    return this.flowsService.searchAndFilter(this.search(), this.selectedTag());
  });

  // effect for debug
  constructor() {
    effect(() => {
      // just to observe changes
      // console.log('Filtered flows:', this.filtered().length);
    });
  }

  openCreate() { this.showCreateModal.set(true); }
  closeCreate() { this.showCreateModal.set(false); }

  createDemo() {
    this.flowsService.add({
      id: 0,
      title: 'New Flow ' + Math.floor(Math.random()*999),
      type: 'Notifications',
      tags: [],
      badge: 'New',
      created: new Date().toISOString().slice(0,10),
      archived: false
    });
    this.closeCreate();
  }
}
