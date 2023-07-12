import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './core/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './core/app/app.component';
import { NavbarComponent } from './modules/layouts/default/navbar/navbar.component';
import { UserComponent } from './modules/pages/user/user.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { AuthFormComponent } from './modules/components/auth-form/auth-form.component';
import { RegisterFormComponent } from './modules/components/register-form/register-form.component';
import { PhotoComponent } from './modules/pages/user/photo/photo.component';
import { FooterComponent } from './modules/layouts/default/footer/footer.component';
import { PostFormComponent } from './modules/components/post-form/post-form.component';

import { AuthGuard } from './core/guards/auth-guard';
import { MyAccountComponent } from './modules/pages/my-account/my-account.component';
import { ErrorComponent } from './modules/pages/error/error.component';

import { ContentAnimateDirective } from './core/directives/content-animate.directive';
import { DefaultComponent } from './modules/layouts/default/default.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LogoutComponent } from './modules/pages/logout/logout.component';
import { AuthPipe } from './core/pipes/auth.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { RoutePipe } from './core/pipes/route.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UserComponent,
    AuthFormComponent,
    RegisterFormComponent,
    PhotoComponent,
    FooterComponent,
    PostFormComponent,
    MyAccountComponent,
    ErrorComponent,
    ContentAnimateDirective,
    DefaultComponent,
    LogoutComponent,
    AuthPipe,
    RoutePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatMenuModule, MatIconModule, MatDialogModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
