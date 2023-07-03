import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './resources/layouts/app/app.component';
import { NavbarComponent } from './resources/navigation/navbar/navbar.component';
import { UserComponent } from './resources/pages/user/user.component';
import { HomeComponent } from './resources/pages/home/home.component';
import { AuthFormComponent } from './resources/components/auth-form/auth-form.component';
import { RegisterFormComponent } from './resources/components/register-form/register-form.component';
import { PhotoComponent } from './resources/pages/user/photo/photo.component';
import { ModalComponent } from './resources/components/modal/modal.component';
import { FooterComponent } from './resources/navigation/footer/footer.component';
import { PostFormComponent } from './resources/components/post-form/post-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UserComponent,
    AuthFormComponent,
    RegisterFormComponent,
    PhotoComponent,
    ModalComponent,
    FooterComponent,
    PostFormComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
