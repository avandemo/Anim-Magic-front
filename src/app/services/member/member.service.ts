import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  membersSubject = new Subject();
  
  BASE_URL = 'http://localhost:8081/';

  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get(this.BASE_URL + 'members')
                    .pipe(map(res => res));
  }

  getMembersByDci(dci) {
    return this.http.get(this.BASE_URL + `members/${dci}`)
                    .pipe(map(res => res));
  }

  addMember(memberData) {
    return this.http.post(this.BASE_URL + 'members', memberData)
                    .pipe(map(res => {
                      console.log(res);
                      this.membersSubject.next(memberData);
                    }));
  }

  updateMember(memberData) {
    return this.http.put(this.BASE_URL + 'members', memberData)
                    .pipe(map(res => {
                      console.log(res);
                      this.membersSubject.next(memberData);
                    }));
  }
}
