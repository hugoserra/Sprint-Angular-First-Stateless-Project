import { Component } from '@angular/core';
import { LeftSidebarComponent } from "../components/left-sidebar/left-sidebar.component";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Importando RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ RouterModule, LeftSidebarComponent]
})
export class AppComponent {

}
