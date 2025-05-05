import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export type FormFieldsType = Array<{
  controlName: string;
  displayName: string;
  placeHolder: string;
  type: 'string' | 'Date' | 'number' | 'mail' | 'tel' | 'subForm' | 'subFormArray' | 'dropdown';
  isRegex: boolean;
  regexExp?: RegExp;
  isMandatory: boolean;
  subFormFields?: FormFieldsType;
  updateOn: 'change' | 'blur' | 'submit',
  disable: boolean
}>

export type countryList = Array<{
  id: number,
  name: string,
  iso2: string,
  iso3: string,
  phonecode: string,
  capital: string,
  currency: string,
  native: string,
  emoji: string
}>

class FormValidationClass {
  protected nullValidator = (control: AbstractControl): null | ValidationErrors => {
    return control.getRawValue() === null
      ? { required: true }
      : control.getRawValue() === ""
        ? { required: true }
        : control.getRawValue().length == 0
          ? { required: true }
          : null
  }

  protected regexValidator = (regex: RegExp): ValidatorFn => {
    return (control: AbstractControl): null | ValidationErrors => {
      return regex.test(control.getRawValue()) ? null : { invalidFormat: true }
    }
  }

  protected combineValidators = (...validators: Array<ValidatorFn>) => {
    return (control: AbstractControl) => {
      for (let validator of validators) {
        const result = validator(control);
        if (result) return result;
      }
      return null;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class BookingService extends FormValidationClass {
  private formFields: FormFieldsType = [
    {
      controlName: "guestName",
      displayName: "Guest Name",
      placeHolder: 'Please enter your name here',
      type: 'string',
      isRegex: true,
      isMandatory: true,
      disable: false,
      updateOn: 'blur',
      regexExp: /^(?!.*\d)(?!.*test).*$/i
    },
    {
      controlName: "guestEmail",
      displayName: "Guest Email",
      placeHolder: 'Please enter your email here',
      type: 'mail',
      isRegex: false,
      isMandatory: true,
      disable: false,
      updateOn: 'change',
    },
    {
      controlName: "roomId",
      displayName: "Room Id",
      placeHolder: 'Please enter the room you want to be booked here',
      type: 'string',
      isRegex: false,
      isMandatory: true,
      disable: true,
      updateOn: 'change',
    },
    {
      controlName: "checkinDate",
      displayName: "Checkin Date",
      placeHolder: 'Please provide checkin date',
      type: 'Date',
      isRegex: false,
      isMandatory: true,
      disable: false,
      updateOn: 'change',
    },
    {
      controlName: "checkoutDate",
      displayName: "Checkout Date",
      placeHolder: 'Please provide checkout date',
      type: 'Date',
      isRegex: false,
      isMandatory: true,
      disable: false,
      updateOn: 'change',
    },
    {
      controlName: "bookingStatus",
      displayName: "Booking Status",
      placeHolder: "What is status of your booking",
      type: 'string',
      isRegex: false,
      isMandatory: true,
      disable: false,
      updateOn: 'change',
    },
    {
      controlName: "bookingAmount",
      displayName: "Booking Amount",
      placeHolder: 'Enter amount of your booking',
      type: 'number',
      isRegex: false,
      isMandatory: true,
      disable: false,
      updateOn: 'change',
    },
    {
      controlName: "bookingDate",
      displayName: "Booking Date",
      placeHolder: 'Provide the date you booked',
      type: 'Date',
      isRegex: false,
      isMandatory: true,
      disable: false,
      updateOn: 'change',
    },
    {
      controlName: "guests",
      displayName: "Guests",
      placeHolder: '',
      type: 'subFormArray',
      isRegex: false,
      isMandatory: true,
      disable: false,
      updateOn: 'change',
      subFormFields: [
        {
          controlName: "guestName",
          displayName: "Guest Name",
          placeHolder: "Enter guest's Name",
          type: 'string',
          isRegex: false,
          isMandatory: true,
          disable: false,
          updateOn: 'change',
        },
        {
          controlName: "guestAge",
          displayName: "Guest Age",
          placeHolder: "Enter guest's age",
          type: 'number',
          isRegex: false,
          isMandatory: true,
          disable: false,
          updateOn: 'change',
        }
      ]
    },
    {
      controlName: "address",
      displayName: "Guest Address",
      placeHolder: "",
      type: 'subForm',
      isMandatory: false,
      disable: false,
      updateOn: 'change',
      isRegex: false,
      subFormFields: [
        {
          controlName: "guestCountry",
          displayName: "Guest Country",
          placeHolder: 'Enter your Country Name',
          type: 'dropdown',
          isRegex: false,
          isMandatory: true,
          disable: false,
          updateOn: 'change',
        },
        {
          controlName: "guestState",
          displayName: "Guest State",
          placeHolder: 'Enter your State name',
          type: 'string',
          isRegex: false,
          isMandatory: true,
          disable: false,
          updateOn: 'change',
        },
        {
          controlName: "guestAddress1",
          displayName: "Guest Address 1",
          placeHolder: 'Enter your address',
          type: 'string',
          isRegex: false,
          isMandatory: true,
          disable: false,
          updateOn: 'change',
        },
        {
          controlName: "guestAddress2",
          displayName: "Guest Address 2",
          placeHolder: 'Enter your address',
          type: 'string',
          isRegex: false,
          isMandatory: true,
          disable: false,
          updateOn: 'change',
        },
        {
          controlName: "mobileNumber",
          displayName: "Mobile Number",
          placeHolder: 'Please enter your phone number',
          type: 'tel',
          isRegex: true,
          regexExp: /^\d{10}$/,
          isMandatory: true,
          disable: false,
          updateOn: 'change',
        },
        {
          controlName: "guestZipCode",
          displayName: "Guest Zip Code",
          placeHolder: 'Enter Zip Code',
          type: 'number',
          isRegex: false,
          isMandatory: true,
          disable: false,
          updateOn: 'change',
        },
      ]
    },
  ]

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    super();
  }

  getFormFields = (): FormFieldsType => this.formFields

  private addValidator(formField: FormFieldsType[0], formControl: FormControl | FormArray) {
    const validatorFnList: Array<ValidatorFn> = new Array()
    if (formField.isMandatory) {
      validatorFnList.push(this.nullValidator)
    }
    if (formField?.isRegex && formField?.regexExp) {
      validatorFnList.push(this.regexValidator(formField?.regexExp))
    }
    if (validatorFnList.length > 0) {
      formControl.addValidators(this.combineValidators(...validatorFnList))
    }
  }

  private buildForms = (formGroupObj: { [key: string]: FormControl | FormGroup | FormArray }): FormGroup => new FormGroup(formGroupObj)

  createForms(formFields: FormFieldsType, isTncReq: boolean): any {
    const formGroupObj: { [key: string]: FormControl | FormGroup | FormArray } = {}

    for (const formField of formFields) {
      if (formField.type === 'subForm' && formField.subFormFields?.length) {
        formGroupObj[formField.controlName] = this.createForms(formField.subFormFields, isTncReq)
      } else if (formField.type === 'subFormArray') {
        let newControl: FormArray = this.fb.array([])
        this.addValidator(formField, newControl)
        formGroupObj[formField.controlName] = newControl
        // formGroupObj[formField.controlName] = this.fb.array([])
      } else {
        let newControl: FormControl = new FormControl(null, {
          updateOn: formField?.updateOn
        })
        this.addValidator(formField, newControl)
        if (formField.disable) {
          newControl.disable()
        }
        formGroupObj[formField.controlName] = newControl
      }
    }
    if (isTncReq) {
      formGroupObj['tnc'] = new FormControl(false, { validators: [Validators.requiredTrue] })
    }

    return this.buildForms(formGroupObj)
  }

  getCountriesList(): Promise<countryList> {
    const headers = new HttpHeaders({
      'X-CSCAPI-KEY': 'QlRFeHpSN25iTGJZTFVwWUNrRUJFeWUwRUFYZ0JBaW1TQ3h5cHBhOQ=='
    });
    return new Promise<countryList>((resolve, reject) => {
      this.http.get<countryList>('https://api.countrystatecity.in/v1/countries', { headers })
        .subscribe({
          next: (response) => resolve(response),
          error: (error) => {
            console.error(error);
            reject(error);
          }
        })
    })
  }

  getPosts = (payload: { [key: string]: any }) => this.http.post('https://jsonplaceholder.typicode.com/posts', payload)
}
