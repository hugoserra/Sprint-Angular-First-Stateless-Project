import { Popup } from './../../models/popup.models';
import { Component, effect, ElementRef, Renderer2 } from '@angular/core';
import { PopupService } from '../../services/popup/popup.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [NgIf],
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
  public popups:Popup[] = [];
  constructor(private popupService: PopupService)
  {
    effect(() =>
    {
      if(this.popupService.popup().time > 0)
      {
        this.popups.push(this.popupService.popup());

        if(this.popupService.popup().type != "confirm")
        setTimeout(() =>
        {
          this.popups.splice(0, 1);
        }, this.popupService.popup().time);
      }
    });
  }

  hidden(popup: Popup)
  {
    this.popups[this.popups.indexOf(popup)].visibility = false;
    this.popups.splice(this.popups.indexOf(popup),1);
  }
}
