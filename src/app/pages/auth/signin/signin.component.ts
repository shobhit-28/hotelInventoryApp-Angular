import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonPagesModuleModule } from '../../common-pages-module.module';
import { HoverDirective } from '../../../directives/hover-directive/hover.directive';
import { EmailValidatorDirective } from '../../../directives/emailValidator/email-validator.directive';
import { Router } from '@angular/router';
import { AuthService } from '../authConfig/services/auth.service';

type logInType = { userName: string, password: string, [key: string]: string }

@Component({
  selector: 'hinv-signin',
  standalone: true,
  imports: [CommonPagesModuleModule, HoverDirective, EmailValidatorDirective],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  private signInDefaultData: logInType = {
    userName: null!,
    password: null!,
  }

  public signInData: logInType = JSON.parse(JSON.stringify(this.signInDefaultData))

  public formsInputFieldsArr: ReadonlyArray<{
    displayName: string,
    fieldFormName: string,
    type: 'email' | 'password'
  }> = Object.freeze([
    {
      displayName: 'User Name',
      fieldFormName: 'userName',
      type: 'email',
    }, {
      displayName: 'Password',
      fieldFormName: 'password',
      type: 'password',
    }
  ])

  public logIn(formGroup: NgForm) {
    this.authService.login(formGroup.form.value.userName, formGroup.form.value.password)
  }
}
