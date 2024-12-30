import { Injectable, signal } from '@angular/core';
import { Popup } from '../../models/popup.models';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  public popup = signal<Popup>({text: "", time: 0, type:"update", visibility: true});

  set_popup(text: string = "", time: number = 3000, type: string = "update", visibility: boolean = true, action: () => void = () => {})
  {
    this.popup.set({text: text, time: time, type:type, visibility:visibility, action:action});
  }

  constructor() { }
}
