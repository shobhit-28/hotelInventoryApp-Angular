import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ConfigService } from '../../services/config/config.service';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { BookingService, FormFieldsType } from './service/booking.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class BookingComponent implements OnInit {
  @ViewChild('guestsModal') guestsModal!: TemplateRef<any>
  @ViewChild('addEditGuestModal') addEditGuestModal!: TemplateRef<any>

  bookingForm!: FormGroup
  formFields: FormFieldsType = new Array();
  guestModalRef!: MatDialogRef<any>;
  addEditGuestModalRef!: MatDialogRef<any>;
  subFormGrpForArr: { fg: FormGroup, ff: FormFieldsType, action: 'add' | 'edit', editIndex?: number } = { fg: new FormGroup(''), ff: new Array(), action: 'add' }

  constructor(
    private configService: ConfigService,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.formFields = data['fields'];
      this.createForm();
    });
    console.log(this.bookingForm)
    console.log(this.bookingForm.get('address.guestAddress1'))

    // some RXJS Ex

    this.bookingForm.valueChanges
      .pipe(
        mergeMap((data) => this.bookingService.getPosts(data))
      )
      .subscribe((res) => console.log(res))
    this.bookingForm.valueChanges
      .pipe(
        switchMap((data) => this.bookingService.getPosts(data))
      )
      .subscribe((res) => console.log(res))
    this.bookingForm.valueChanges
      .pipe(
        exhaustMap((data) => this.bookingService.getPosts(data))
      )
      .subscribe((res) => console.log(res))



    // this.bookingForm.valueChanges
    //   .subscribe((data) => {
    //     console.log(this.bookingForm)
    //     console.log(this.bookingForm.controls)
    //   })
  }

  createForm() {
    // this.formFields = this.route.snapshot.data['fields']
    if (this.formFields && this.formFields.length > 0) {
      this.bookingForm = this.bookingService.createForms(this.formFields, true);
    } else {
      console.error('Form fields are not available');
    }
  }

  bookRoom() {
    console.log(this.bookingForm)
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value)
    } else {
      this.bookingForm.markAllAsTouched()
    }
  }

  getNestedFormGroup(nestedFormGroup: FormGroup, name: string): FormGroup {
    return nestedFormGroup.get(name) as FormGroup;
  }

  getControl(fg: FormGroup, control1: string, control2: string): FormControl {
    return fg.get(`${control1}.${control2}`) as FormControl
  }

  get guestsControl(): FormArray {
    return this.bookingForm.get('guests') as FormArray
  }

  addGuests(formField: FormFieldsType[0]) {
    if (formField.subFormFields) {
      this.guestModalRef = this.dialog.open(this.guestsModal, {
        width: '750px',
        maxHeight: '60vh',
      })
      this.subFormGrpForArr['ff'] = formField.subFormFields
    }
    console.log(this.guestModalRef)
  }

  async openAddEditGuestsModal(action: 'add' | { actionName: 'edit', index: number }) {
    this.subFormGrpForArr['fg'] = await this.getForm(this.subFormGrpForArr['ff'])
    if (action === 'add') {
      this.subFormGrpForArr['action'] = 'add'
    } else if (action.actionName === 'edit') {
      this.subFormGrpForArr['action'] = 'edit'
      this.subFormGrpForArr['editIndex'] = action.index
      const formArr = this.bookingForm.get('guests') as FormArray
      const fg = formArr.at(action.index) as FormGroup
      this.subFormGrpForArr['fg'].patchValue(fg.value)
    }
    this.addEditGuestModalRef = this.dialog.open(this.addEditGuestModal, {
      width: '300px',
      maxHeight: '60vh',
    })
  }

  getForm(formField: FormFieldsType): Promise<FormGroup> {
    return new Promise<FormGroup>((resolve, reject) => {
      try {
        resolve(this.bookingService.createForms(formField, false))
      } catch (error) {
        reject(error)
      }
    })
  }

  closeGuestsModal(modalRef: MatDialogRef<any>) {
    modalRef.close()
  }

  addEditGuest(action: 'add' | 'edit') {
    if (this.subFormGrpForArr.fg.valid) {
      if (action === 'add') {
        const formArr = this.bookingForm.get('guests') as FormArray
        formArr.push(this.subFormGrpForArr.fg)
      } else {
        if (this.subFormGrpForArr['editIndex'] !== undefined) {
          const formArr = this.bookingForm.get('guests') as FormArray
          const fg = formArr.at(this.subFormGrpForArr['editIndex']) as FormGroup
          fg.patchValue(this.subFormGrpForArr.fg.value)
        }
      }
      this.closeGuestsModal(this.addEditGuestModalRef)
    }
  }

  deleteGuestDetails(index: number) {
    const formArr = this.bookingForm.get('guests') as FormArray
    formArr.removeAt(index)
  }

}
