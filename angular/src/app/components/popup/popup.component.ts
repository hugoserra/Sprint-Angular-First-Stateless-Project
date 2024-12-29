import { Component, effect, ElementRef, Renderer2 } from '@angular/core';
import { PopupService } from '../../services/popup/popup.service';
import { Popup } from '../../models/popup.models';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }), // Começa com opacidade 0
        animate('300ms', style({ opacity: 1 })) // Fades in
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })) // Fades out
      ])
    ])
  ]
})

export class PopupComponent
{
  public popups:Partial<Popup>[] = [];
  constructor(private popupService: PopupService)
  {
    effect(() =>
    {
      if(this.popupService.popup().time > 0)
      {
        this.popups.push(this.popupService.popup());
        setTimeout(() =>
        {
          this.popups.splice(0, 1);
        }, this.popupService.popup().time);
      }
    });
  }
}
