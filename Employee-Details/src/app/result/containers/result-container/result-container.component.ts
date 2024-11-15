import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { BehaviorSubject } from 'rxjs';
import { ResultData } from 'src/app/core/interface';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss'],
})
export class ResultContainerComponent implements OnInit, OnDestroy {
  _resultData$ = this.resultService.resultsSubjectToShow$;
  _designationData = this.resultService.designationsData$;
  constructor(private resultService: ResultsService) {}
  ngOnInit(): void {
    this.resultService.getData();
    //this._designationData = this.resultService.getAllDesignations();
  }
  deleteEmp(id: string) {
    console.log(id);
    this.resultService.deleteEmployee(id);
  }
  editEmpData(data: ResultData) {
    console.log('editedData', data);
    this.resultService.editEmployee(data);
  }
  searchFilter(key: string) {
    this.resultService.filterOnSearch(key);
  }
  designationFilter(designation: string) {
    this.resultService.designationFilter(designation);
  }
  resetAll() {
    this.resultService.resetAllFilters();
  }
  ngOnDestroy(): void {
    this._resultData$.unsubscribe();
  }
}
