import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class DashboardService {

  filteredData: any = [];
  private subject = new Subject<any>();

  setData(data: any) {
    this.subject.next(data);
  }
  getData(): Observable<any> {
    return this.subject.asObservable();
  }
}