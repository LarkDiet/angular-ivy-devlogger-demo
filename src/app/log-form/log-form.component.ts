import { Component, OnInit } from '@angular/core';
import {v4 as uuid} from 'uuid';

import {LogService} from '../services/log.service';

import { Log } from '../models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;

  isNew: boolean = true;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.selectedLog.subscribe(log => {
      if(log.id !== null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    })
  }

  onSubmit() {
    if(this.isNew){
      const newLog = {
        id: uuid(),
      }
    } else {
      
    }
  }

}