import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResultData } from 'src/app/core/interface';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss'],
})
export class EditDetailsComponent implements OnInit {
  modalForm: FormGroup | any;
  _modalData: ResultData | null = null;
  @Input() set modalData(data: ResultData | null) {
    if (data) {
      this._modalData = data;
    }
  }
  @Output() closeMod = new EventEmitter<boolean>();
  @Output() formData = new EventEmitter<any>();
  ngOnInit(): void {
    this.modalForm = new FormGroup({
      name: new FormControl(
        this._modalData?.empName ? this._modalData?.empName : '',
        Validators.required
      ),
      id: new FormControl(
        this._modalData?.id ? this._modalData?.id : '',
        Validators.required
      ),
      code: new FormControl(
        this._modalData?.empCode ? this._modalData?.empCode : '',
        Validators.required
      ),
      designation: new FormControl(
        this._modalData?.empDesignation ? this._modalData?.empDesignation : '',
        Validators.required
      ),
      role: new FormControl(
        this._modalData?.role ? this._modalData?.role : '',
        Validators.required
      ),
    });
  }
  closeModal() {
    this.closeMod.emit(false);
  }
  get getControls() {
    return this.modalForm.controls;
  }
  onSubmit() {
    if (this.modalForm.valid) {
      let rawData = this.modalForm.getRawValue();
      this.formData.emit({
        empName: rawData.name,
        id: rawData.id,
        empCode: rawData.code,
        empDesignation: rawData.designation,
        role: rawData.role,
        empEmailId: this._modalData?.empEmailId,
      });
    }
  }
}
