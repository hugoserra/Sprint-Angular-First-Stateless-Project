import { PopupService } from './../../services/popup/popup.service';
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
  constructor(private userService: UserService, private popupService: PopupService){}

  delete_user()
  {
    this.userService.delete_user(this.user().id);
    this.popupService.set_popup(`Usuário: ${this.user().name}, Deletado!`, 3000, "delete");
  }
}
