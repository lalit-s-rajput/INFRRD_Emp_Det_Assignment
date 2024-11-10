import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Data, resultData } from 'src/app/core/interface';
@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  private url: string =
    'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllEmployee';
  resultsSubject$: BehaviorSubject<resultData[]> = new BehaviorSubject<
    resultData[]
  >([]);
  constructor(private http: HttpClient) {}
  getData() {
    this.http.get<Data>(this.url).subscribe({
      next: (resultData: Data) => {
        this.resultsSubject$.next(resultData.data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
