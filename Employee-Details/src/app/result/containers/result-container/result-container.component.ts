import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { BehaviorSubject } from 'rxjs';
import { ResultData } from 'src/app/core/interface';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss'],
})
export class ResultContainerComponent implements OnInit {
  resultData$ = this.resultService.resultsSubject$;
  constructor(private resultService: ResultsService) {}
  ngOnInit(): void {
    this.resultService.getData();
  }
  deleteEmp(id: string) {
    console.log(id);
    this.resultService.deleteEmployee(id);
  }
  editEmpData(data: ResultData) {
    console.log('editedData', data);
    this.resultService.editEmployee(data);
  }
}
