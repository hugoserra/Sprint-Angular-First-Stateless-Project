import { ContadorDataService } from './../../services/contador-data.service';
import { Component, computed, effect } from '@angular/core';

@Component({
  selector: 'app-multiplicador',
  standalone: true,
  imports: [],
  templateUrl: './multiplicador.component.html',
  styleUrl: './multiplicador.component.scss'
})
export class MultiplicadorComponent {
  count = this.ContadorDataService.data;

  constructor(private ContadorDataService: ContadorDataService){}

  multiply()
  {
    this.ContadorDataService.data.update((value) => {return value * 10});
  }

}
