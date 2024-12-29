import { Injectable, signal } from '@angular/core';
import { Popup } from '../../models/popup.models';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  public popup = signal<Popup>({text: "", time: 0, type:"update"});

  set_popup(text: string = "", time: number = 3000, type: string = "update")
  {
    this.popup.set({text: text, time: time, type:type});
  }

  constructor() { }
}
