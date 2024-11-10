import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Data, ResultData } from 'src/app/core/interface';
@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  private getAllData: string = 'http://localhost:3000/data';
  // private deleteEmp:string = "http://localhost:3000/data";
  resultsSubject$: BehaviorSubject<ResultData[]> = new BehaviorSubject<
    ResultData[]
  >([]);
  constructor(private http: HttpClient) {}
  getData() {
    this.http.get<ResultData[]>(this.getAllData).subscribe({
      next: (resultData: ResultData[]) => {
        this.resultsSubject$.next(resultData);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  deleteEmployee(id: string) {
    this.http.delete(`${this.getAllData}/${id}`).subscribe({
      next: (data: any) => {
        console.log('deleted employee', data);
        this.getData();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  editEmployee(data: ResultData) {
    this.http
      .put(`${this.getAllData}/${data.id}`, JSON.stringify(data), {})
      .subscribe({
        next: (data: any) => {
          console.log('edited employee', data);
          this.getData();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
