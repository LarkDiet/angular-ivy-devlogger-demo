import { Component, OnInit } from '@angular/core';

import {LogService} from '../services/log.service';

import { Log } from '../models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.selectedLog.subscribe(log => {
      console.log(log);
    })
  }

}