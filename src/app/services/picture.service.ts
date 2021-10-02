import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) { }
  getPictureList() {
    return this.http.get("http://www.mocky.io/v2/5daffe6d2f00001172c1374b")
  }
}
