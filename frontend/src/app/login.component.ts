import { Component} from '@angular/core';
import { WebService } from './web.service';
import { AuthService } from './auth.service';

@Component({
    selector: 'login',
    template: `
                <mat-card>
                    <mat-input-container>
                        <input matInput [(ngModel)]="loginData.email" placeholder="Email" type="email">
                    </mat-input-container>

                    <mat-input-container>
                        <input matInput placeholder="Password" [(ngModel)]="loginData.password" type="password">
                    </mat-input-container>

                    <button mat-raised-button color="primary" (click)="login()">Login</button>
                </mat-card>
                
                `
})

export class LoginComponent {

    loginData = {
        email: '',
        password: ''
    };
  
  constructor(private auth:AuthService){

  }

  login(){
    this.auth.login(this.loginData);
  }
}