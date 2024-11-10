import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResultData } from 'src/app/core/interface';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})
export class DetailsCardComponent implements OnInit {
  _empDetails: ResultData | null = null;
  @Input() set empDetails(data: ResultData | null) {
    this._empDetails = data;
  }
  @Output() deleteEmp = new EventEmitter<string>();
  @Output() editEmpData = new EventEmitter<ResultData>();
  showModal = false;
  ngOnInit(): void {}
  deleteEmployee() {
    this.deleteEmp.emit(this._empDetails?.id);
  }
  editEmployee() {
    this.showModal = true;
  }
  closeModal(flag: boolean) {
    this.showModal = flag;
  }
  onSubmit() {}
  getFormData(data: ResultData) {
    this.editEmpData.emit(data);
    this.showModal = false;
  }
}
