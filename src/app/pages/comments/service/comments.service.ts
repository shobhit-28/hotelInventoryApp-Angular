import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type comments = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient
  ) { }

  getComments(): Promise<Array<comments>> {
    return new Promise<Array<comments>>((resolve, reject) => {
      this.http.get<Array<comments>>(`https://jsonplaceholder.typicode.com/comments`)
        .subscribe({
          next: (res: Array<comments>) => resolve(res),
          error: (err: HttpErrorResponse) => {
            console.error(err)
            reject(err)
          }
        })
    })
  }
}
