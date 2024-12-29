import { Component, Input, input } from '@angular/core';
import { UserService } from '../../services/UserService/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent
{
  //preferivel segundo a documentação do angular, em vez de @input
  user = input.required<User>();
  constructor(private userService: UserService){}

  delete_user()
  {
    this.userService.delete_user(this.user().id);
  }
}
