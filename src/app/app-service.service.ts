import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(
      'https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098'
    );
  }

  sendData(data: any) {
    console.log(data);
  }
}
