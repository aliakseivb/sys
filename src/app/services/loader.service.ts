import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isShowed$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  show(param:boolean){
    this.isShowed$.next(param);
  }

  hide(param:boolean){
    this.isShowed$.next(param);
  }
}
