import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContadorDataService {
  public data = signal(0);

  constructor() { }
}
