import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl = "http://localhost:8080";
  private user = signal<User | null>(null);
  private users = signal<User[]>([]);

  constructor(private http: HttpClient) { }

  get_users()
  {
    this.http.get<User[]>(`${this.baseUrl}/users`).subscribe((users) => {
      this.users.set(users);
    });

    return this.users;
  }

  get_user(id_user: number)
  {
    this.http.get<User | null>(`${this.baseUrl}/user/${id_user}`).subscribe((user) => {
      this.user.set(user);
    })

    return this.user;
  }

  save_user(user: Partial<User>)
  {
    this.http.post<User | null>(`${this.baseUrl}/user`, user).subscribe((user) => {
      if(user)
      this.users.update(users => {
        users.push(user);
        return users;
      });
    })
  }

  delete_user(id: Number)
  {
    this.http.delete(`${this.baseUrl}/user/${id}`, ).subscribe((id) =>
    {
      this.users.update(users => {
        var user_index = users.findIndex((user) => { return user.id === id });
        if(user_index != -1)
          users.splice(user_index,1);
        return users;
      });
    })
  }

}
