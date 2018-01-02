import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSnackBarModule,
        MatToolbarModule

} from '@angular/material';

import { AppComponent } from './app.component';
import { MessageComponent } from './message.component';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';
import { WebService } from './web.service';
import { AuthService } from './auth.service';

import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { UserComponent } from './user.component';


var routes = [
  {
    path: '' ,
    component: HomeComponent
  },
  {
    path: 'message' ,
    component: MessageComponent
  },
  {
    path: 'message/:name' ,
    component: MessageComponent
  },

  {
    path: 'register' ,
    component: RegisterComponent
  },

  {
    path: 'login' ,
    component: LoginComponent
  },

  {
    path: 'user' ,
    component: UserComponent
  },


] ;

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
