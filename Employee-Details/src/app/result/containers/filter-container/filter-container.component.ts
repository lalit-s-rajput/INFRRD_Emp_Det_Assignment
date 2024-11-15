import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss'],
})
export class FilterContainerComponent {
  @Input() designations: string[] | null = [];
  @Output() key = new EventEmitter<string>();
  @Output() designation = new EventEmitter<string>();
  @Output() reset = new EventEmitter();
  @ViewChild('searchInput', { static: true })
  searchInput!: ElementRef;
  @ViewChild('selectValue', { static: true })
  selectValue!: ElementRef;
  search(event: any) {
    let value = event.currentTarget.value;
    console.log(value);
    if (value.length > 2) {
      this.key.emit(value);
    }
  }
  getSelectedData(event: any) {
    let value = event.target.value;
    if (value) {
      console.log(value);
      this.designation.emit(value);
    }
  }
  resetAll() {
    this.searchInput.nativeElement.value = '';
    this.selectValue.nativeElement.value = '';
    this.reset.emit();
  }
}
