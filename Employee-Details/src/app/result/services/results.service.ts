import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Data, filterState, ResultData } from 'src/app/core/interface';
@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  private getAllData: string = 'http://localhost:3000/data';
  resultsSubject$: BehaviorSubject<ResultData[]> = new BehaviorSubject<
    ResultData[]
  >([]);
  resultsSubjectToShow$: BehaviorSubject<ResultData[] | []> =
    new BehaviorSubject<ResultData[] | []>([]);
  designationsData$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(
    []
  );
  filterObject: filterState = { searchString: '', designation: '' };
  constructor(private http: HttpClient) {}
  getData() {
    this.http.get<ResultData[]>(this.getAllData).subscribe({
      next: (resultData: ResultData[]) => {
        this.resultsSubject$.next([...resultData]);
        this.setAllDesignations();
        this.resultsSubjectToShow$.next([...resultData]);
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
  filterOnSearch(key: string) {
    let keyData = key.toLowerCase();
    this.filterObject.searchString = keyData;
    let data = this.resultsSubjectToShow$.value.filter((item) => {
      return (
        item.empEmailId.toLowerCase().includes(keyData) ||
        item.empName.toLowerCase().includes(keyData)
      );
    });
    //return data;
    this.resultsSubjectToShow$.next(data);
  }
  designationFilter(designation: string) {
    this.filterObject.designation = designation;
    let data = this.resultsSubjectToShow$.value.filter((item) => {
      return item.empDesignation === designation;
    });
    //return data;
    this.resultsSubjectToShow$.next(data);
  }
  applyFilters(filterData: filterState) {
    // let filteredData: ResultData[] = [];
    if (filterData.searchString) {
      this.filterOnSearch(filterData.searchString);
    }
    if (filterData.designation) {
      this.designationFilter(filterData.designation);
    }
    // this.resultsSubjectToShow$.next(filteredData);
  }
  setAllDesignations() {
    let data = this.resultsSubject$.value.reduce(
      (acc: string[], curr: ResultData) => {
        acc.push(curr.empDesignation);
        return acc;
      },
      []
    );
    this.designationsData$.next(data);
  }
  resetAllFilters() {
    this.resultsSubjectToShow$.next([...this.resultsSubject$.value]);
  }
}
