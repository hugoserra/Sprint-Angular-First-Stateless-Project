import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl = "http://localhost:8080";
  private user = signal<object | null>(null);
  private users = signal<object[]>([]);

  constructor(private http: HttpClient) { }

  get_users()
  {
    this.http.get<object[]>(`${this.baseUrl}/users`).subscribe((users) => {
      this.users.set(users);
    });

    return this.users;
  }

  get_user(id_user: number)
  {
    this.http.get<object | null>(`${this.baseUrl}/user/${id_user}`).subscribe((user) => {
      this.user.set(user);
    })

    return this.user;
  }

  save_user(user: object)
  {
    console.log(user);
    this.http.post<object | null>(`${this.baseUrl}/user`, user).subscribe((user) => {
      if(user)
      this.users.update(users => {
        users.push(user);
        return users;
      });
    })


  }

}
