import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { filterState } from 'src/app/core/interface';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss'],
})
export class FilterContainerComponent {
  @Input() designations: string[] | null = [];
  @Output() filterData = new EventEmitter<filterState>();
  @Output() reset = new EventEmitter();
  @ViewChild('searchInput', { static: true })
  searchInput!: ElementRef;
  @ViewChild('selectValue', { static: true })
  selectValue!: ElementRef;
  resetAll() {
    this.searchInput.nativeElement.value = '';
    this.selectValue.nativeElement.value = '';
    this.reset.emit();
  }
  applyAll() {
    this.filterData.emit({
      searchString: this.searchInput.nativeElement.value,
      designation: this.selectValue.nativeElement.value,
    });
  }
}
