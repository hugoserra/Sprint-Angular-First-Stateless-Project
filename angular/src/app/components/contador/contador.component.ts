import { ContadorDataService } from './../../services/contador-data.service';
import { Component, effect } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss'
})
export class ContadorComponent {

  count = this.ContadorDataService.data;

  constructor(private ContadorDataService: ContadorDataService){}

  increment()
  {
    this.ContadorDataService.data.update((value) => {return value + 1});
  }

  decrement()
  {
    this.ContadorDataService.data.update((value) => {return value - 1});
  }

}
