import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catch, throw, of } from 'rxjs';
import { User } from '../../interfaces/users';

const API = 'https://5af93d25edf5520014cbd24b.mockapi.io/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private actionUrl: string;
  users: User[] = [
    {
      id: 001,
      name: 'Anna',
      old: 25,
      teen: false,
    },
    {
      id: 002,
      name: 'Denis',
      old: 35,
      teen: false,
    },
    {
      id: 003,
      name: 'Artem',
      old: 45,
      teen: false,
    },
    {
      id: 004,
      name: 'Alena',
      old: 15,
      teen: true,
    },
  ];
  // users$: Observable<User[]>;

  constructor(public http: HttpClient) {
    this.actionUrl = API + 'user';
  }

  //get all user
  getAllUser():Observable<User[]>{
    // return this.http.get(this.actionUrl)
    //   .map(this.extractData)
    //   .catch(this.handleErrorObservable);
    return of(this.users);
  }
  //add user
  //get all user
  addUser(data: User):Observable<User[]> {
    // return this.http.post(this.actionUrl, data)
    //   .map(this.extractData)
    //   .catch(this.handleErrorObservable);
    if (data instanceof User) this.users.push(data)
    return of(this.users);
  }
  //add user
  //get all user
  editUser(data: User):Observable<User[]> {
    // return this.http.put(this.actionUrl+`/${data.id}`, data)
    //   .map(this.extractData)
    //   .catch(this.handleErrorObservable);

    const index = this.users.indexOf(data);

    if (index > -1) {
      // this.users.splice(index, 1, data);
      this.users[index] = data;
    }

    return of(this.users);
  }

  //get all user
  deleteUser(id: any):Observable<User[]> {
    // return this.http.delete(this.actionUrl+`/${id}`)
    //   .map(this.extractData)
    //   .catch(this.handleErrorObservable)
    const newUsersArr = this.users.filter(user => user.id !== id)

    return of(newUsersArr);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body;
  }
  private handleErrorObservable(error: Response | any) {
    return Observable.throw(error.message || error);
  }
}
