import { Component } from '@angular/core';
import { UserService } from '../../services/UserService/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-new-users',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-new-users.component.html',
  styleUrl: './register-new-users.component.scss'
})
export class RegisterNewUsersComponent {

  user_name: String = "";
  user_last_name: String = "";
  user_email: String = "";
  user_age: Number = 0;

  constructor(private userService: UserService){}

  save()
  {
    this.userService.save_user({name: this.user_name, last_name:this.user_last_name, email: this.user_email, age:this.user_age});
    this.user_name = "";
    this.user_last_name = "";
    this.user_email= "";
    this.user_age = 0;
  }

}
