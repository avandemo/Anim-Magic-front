import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatTypeService {

  formatTypeSubject = new Subject();

  BASE_URL = 'http://localhost:8081/';

  constructor(private http: HttpClient) { }

  getFormatTypes() {
    return this.http.get(this.BASE_URL + 'formatType')
                    .pipe(map(res => res));
  }

  addFormatType(formatTypeData) {
    return this.http.post(this.BASE_URL + 'formatType', formatTypeData)
                    .pipe(map(res => {
                      console.log(res);
                      this.formatTypeSubject.next(formatTypeData)
                    }));
  }
}
