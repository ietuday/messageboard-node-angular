import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'message',
    template: `<div *ngFor="let message of webservice.messages | async">
                    <mat-card class="card">
                        <mat-card-title [routerLink]="['/message',message.owner]" style="cursor:pointer;">{{message.owner}}</mat-card-title>
                        <mat-card-content>{{message.text}}</mat-card-content>
                    </mat-card>
                </div>
                `
})

export class MessageComponent {
   messages;
  constructor(private webservice: WebService, private route:ActivatedRoute){

  }

  ngOnInit(){
      var name = this.route.snapshot.params.name;
      this.webservice.getMessages(name);
    //   this.webservice.messages.subscribe(messages =>{
    //       this.messages = messages;
    //   }) 
       this.webservice.getUser().subscribe();
  }
}