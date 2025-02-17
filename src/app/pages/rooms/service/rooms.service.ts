import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(
    private http: HttpClient
  ) { }

getPhotos() {
  const req = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
    reportProgress: true
  })
  return this.http.request(req)
}
}
