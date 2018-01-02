import { Component} from '@angular/core';
import { WebService } from './web.service';
import { AuthService } from './auth.service';

@Component({
    selector: 'new-message',
    template: `
    <mat-card class="card">
    <mat-card-content>
      <mat-input-container>
        <textarea [(ngModel)]="message.text" matInput placeholder="Message"></textarea>
      </mat-input-container>
      <mat-card-actions>
          <button mat-button (click)="post()" color="primary">POST</button>
      </mat-card-actions>
    </mat-card-content>
    </mat-card>
                `
})

export class NewMessageComponent {
  message = {
    owner : this.auth.name,
    text : ''
  };
  constructor(private webservice: WebService, private auth: AuthService){

  }

  post(){
    this.webservice.postMessage(this.message);
    this.message.owner = '';
    this.message.text = '';
  }
}
