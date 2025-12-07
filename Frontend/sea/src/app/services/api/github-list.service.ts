import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GithubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private http = inject(HttpClient);

  /**
   * Получить публичные репозитории пользователя GitHub
   */
  getRepositoriesListOfUser(username: string): Observable<GithubRepository[]> {
    const url = `https://api.github.com/users/${username}/repos`;

    return this.http.get<GithubRepository[]>(url);
  }
}
