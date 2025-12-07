
import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  filter,
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ng-app-github-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-list.component.html',
  styleUrl: './github-list.component.scss',
})
export class GithubListComponent {
  private readonly githubService = inject(GithubService);

  readonly username = input('');

  readonly username$ = toObservable(this.username);

  readonly repositoriesList$ = this.username$.pipe(
    filter(Boolean),
    debounceTime(300),
    distinctUntilChanged(),

    switchMap((username) =>
      this.githubService.getRepositoriesListOfUser(username)
    )
  );

  readonly hasRepositoriesList$ = this.repositoriesList$.pipe(
    map((list) => list?.length > 0)
  );
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

type Repository = {
  name: string;
};

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly httpClient = inject(HttpClient);
  private readonly endpointPrefix = 'https://api.github.com/';

  getRepositoriesListOfUser(username: string) {
    // API: https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
    const endpoint = `${this.endpointPrefix}users/${username}/repos`;
    return this.httpClient.get<Repository[]>(endpoint);
  }
}
