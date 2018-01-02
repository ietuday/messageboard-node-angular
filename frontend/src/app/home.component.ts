import { Component } from '@angular/core';
import { MessageComponent } from './message.component';
import { NewMessageComponent } from './new-message.component';


@Component({
  selector: 'home',
  template: `
  <new-message></new-message>
  <message></message>`,
  styleUrls: ['./app.component.css']
})
export class HomeComponent {
  
  constructor(){
  
  } 
}
