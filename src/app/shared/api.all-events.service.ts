import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ApiAllEventsService {

  constructor(private http: HttpClient) {
  }


  getEvent() {
    return this.http.get<any>("http://localhost:3000/")
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
