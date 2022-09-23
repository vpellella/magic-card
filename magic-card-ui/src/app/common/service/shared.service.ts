import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  showProgressBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

}
