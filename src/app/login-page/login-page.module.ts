import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import {HeaderModule} from '../header/header.module';
import {FooterModule} from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent]
})
export class LoginPageModule { }
