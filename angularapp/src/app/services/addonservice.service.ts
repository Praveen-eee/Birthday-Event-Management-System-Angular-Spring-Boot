import { Injectable } from '@angular/core';
import { Addon } from '../class/addon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddonserviceService {

  private baseUrl = 'http://localhost:8080/admin/addAddon';
  private baseUrl2 = 'http://localhost:8080/admin/editAddon';
  private baseUrl3 = 'http://localhost:8080/admin/add-on';
  private baseUrl4 = 'http://localhost:8080/admin/deleteAddon';

  constructor(private httpclient: HttpClient) { }

    getAddon(): Observable<Addon[]>{
      return this.httpclient.get<Addon[]>(`${this.baseUrl3}`);
    }

    addAddon(add: Addon): Observable<object>{
      return this.httpclient.post(`${this.baseUrl}`, add);
    }

    getAddonId(addOnid: number): Observable<Addon>
{

  return this.httpclient.get<Addon>(`${this.baseUrl3}/${addOnid}`);
}

  editAddon(addOnid: number, ad: Addon): Observable<object>{

    return this.httpclient.put(`${this.baseUrl2}/${addOnid}`, ad);
  }

  deleteAddon(addOnid: number): Observable<object>{
    return this.httpclient.delete(`${this.baseUrl4}/${addOnid}`);
  }
}
