import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { Log } from '../models/Log';

@Injectable()
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated content',
        date: new Date('01/05/2022 17:50:00'),
      },
      { id: '2', text: 'Beefed it', date: new Date('01/05/2022 17:55:00') },
      { id: '3', text: 'Unbeefed it', date: new Date('01/05/2022 18:00:00') },
    ];
  }

  getLogs() {
    return this.logs;
  }
}
