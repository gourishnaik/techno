import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public animal=new BehaviorSubject<any>([]);
  public search=new BehaviorSubject<string>('');
  constructor() { }
}
