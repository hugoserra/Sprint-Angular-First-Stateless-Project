import { Component } from '@angular/core';
import { UserService } from '../../services/UserService/user.service';
import { RegisterNewUsersComponent } from "../../components/register-new-users/register-new-users.component";
import { UserComponent } from '../../components/user/user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RegisterNewUsersComponent, UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users: any = this.userService.get_users();
  constructor(private userService: UserService){}

}
