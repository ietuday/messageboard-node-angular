import { Component} from '@angular/core';
import { WebService } from './web.service';


@Component({
    selector: 'user',
    template: `
    <mat-card class="card">
    <mat-card-content>
      <mat-input-container>
        <input [(ngModel)]="model.firstName" matInput placeholder="First Name">
      </mat-input-container>
      <mat-input-container>
        <input [(ngModel)]="model.lastName" matInput placeholder="Last Name">
      </mat-input-container>
      <mat-card-actions>
          <button mat-raised-button (click)="post()" color="primary">Save Changes</button>
      </mat-card-actions>
    </mat-card-content>
    </mat-card>
                `
})

export class UserComponent {
  model = {
    firstName : '',
    lastName : ''
  };
  constructor(private webservice: WebService){

  }

  ngOnInit(){
    this.webservice.getUser().subscribe(res =>{
      this.model.firstName = res.firstName;
      this.model.lastName = res.lastName;
    });
  }

  post(){
    this.webservice.saveUser(this.model);
  }
}
