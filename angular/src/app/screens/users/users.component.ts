import { Component } from '@angular/core';
import { UserService } from '../../services/UserService/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users: any = this.userService.get_users();
  constructor(private userService: UserService){}

}
