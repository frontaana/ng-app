import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DomainsService } from '../../../../services/api/domains.service';
import { Domain } from '../../../../models/domain.model';

@Component({
  selector: 'ng-app-domains',
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent {
  private domainsService = inject(DomainsService);

  // pagination signals
  page = signal(0); // zero-based
  pageSize = signal(3);

  // search
  search = signal('');

  // data
  all = computed<Domain[]>(() => this.domainsService.domains());

  filtered = computed(() => {
    const q = this.search().trim().toLowerCase();
    return q ? this.all().filter(d => d.domain.toLowerCase().includes(q)) : this.all();
  });

  paged = computed(() => {
    const start = this.page() * this.pageSize();
    return this.filtered().slice(start, start + this.pageSize());
  });

  totalPages = computed(() => Math.max(Math.ceil(this.filtered().length / this.pageSize()), 1));

  setPage(p: number) {
    if (p < 0) p = 0;
    if (p >= this.totalPages()) p = this.totalPages() - 1;
    this.page.set(p);
  }
}
