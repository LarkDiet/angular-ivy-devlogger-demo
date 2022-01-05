import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: {
    id: string;
    text: string;
    date: any;
  }[]

  constructor() { }

  ngOnInit() {
    this.logs = [
      {id:'1', text:'Generated content', date:new Date('01/05/2022 17:50:00')},
      {id:'2', text:'Beefed it', date:new Date('01/05/2022 17:55:00')},
      {id:'3', text:'Unbeefed it', date:new Date('01/05/2022 18:00:00')},
    ]
  }

}