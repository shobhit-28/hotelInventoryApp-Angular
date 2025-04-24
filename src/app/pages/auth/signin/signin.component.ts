import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonPagesModuleModule } from '../../common-pages-module.module';
import { HoverDirective } from '../../../directives/hover-directive/hover.directive';

type logInType = { userName: string, password: string, [key: string]: string }

@Component({
  selector: 'hinv-signin',
  standalone: true,
  imports: [CommonPagesModuleModule, HoverDirective],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  private signInDefaultData: logInType = {
    userName: null!,
    password: null!,
  }

  public signInData: logInType = JSON.parse(JSON.stringify(this.signInDefaultData))

  public formsInputFieldsArr: ReadonlyArray<{
    displayName: string,
    fieldFormName: string,
    type: 'text' | 'password'
  }> = Object.freeze([
    {
      displayName: 'User Name',
      fieldFormName: 'userName',
      type: 'text',
    }, {
      displayName: 'Password',
      fieldFormName: 'password',
      type: 'password',
    }
  ])

  public logIn(formGroup: NgForm) {
    console.log(formGroup.form.value)
    if (formGroup.form.value.userName === 'shobhit' && formGroup.form.value.password === 'admin') {
      alert('Logged in successfully')
    } else {
      alert('Try again later')
    }
  }
}
