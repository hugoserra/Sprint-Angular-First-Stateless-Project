import { Component } from '@angular/core';
import { ContadorComponent } from "../../components/contador/contador.component";
import { MultiplicadorComponent } from "../../components/multiplicador/multiplicador.component";

@Component({
  selector: 'app-testes',
  standalone: true,
  imports: [ContadorComponent, MultiplicadorComponent],
  templateUrl: './testes.component.html',
  styleUrl: './testes.component.scss'
})
export class TestesComponent {

}
