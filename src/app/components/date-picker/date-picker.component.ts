import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormFieldsType } from '../../pages/booking/service/booking.service';

@Component({
  selector: 'hinv-date-picker',
  standalone: true,
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.Default,

})
export class DatePickerComponent implements OnInit {
  @Input() parentForm: FormGroup = new FormGroup('')
  @Input() fieldsData!: FormFieldsType[0]

  constructor (private cdr: ChangeDetectorRef) {}

  get control() {
    return this.parentForm?.get(this.fieldsData?.controlName ?? '');
  }  

  ngOnInit(): void {
    this.cdr.detectChanges()
  }
}
