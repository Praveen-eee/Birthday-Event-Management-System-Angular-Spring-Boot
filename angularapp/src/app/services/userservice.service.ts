import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/class/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpclient: HttpClient) { }

  checkEmail(email: string): Observable<boolean>{
    console.log(email);
    return this.httpclient.get<boolean>(`http://localhost:8080/user/signup/`+email);
  }

  storeUser(newUser: User): Observable<any>{
    const requestOptions: object = {
      responseType: 'text'
    };
    return this.httpclient.post('http://localhost:8080/user/signup', newUser, requestOptions);
  }

  storeAdmin(newUser: User): Observable<any>{
    const requestOptions: object = {
      responseType: 'text'
    };
    return this.httpclient.post('http://localhost:8080/admin/signup', newUser, requestOptions);
  }



}
