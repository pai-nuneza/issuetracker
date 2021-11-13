import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  getBoardData(): Observable<any> {
    // should have api service to get the URL
    return this.http.get('assets/mocks/board/board-data.json');
  }

  getTaskItem(taskId?: string): Observable<any> {
    // should have api service to get the URL
    return this.http.get('assets/mocks/board/board-data.json');
  }
}
