import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogFormComponent } from './log-form/log-form.component';
import { LogsComponent } from './logs/logs.component';

import {LogService} from './services/log.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    LogFormComponent,
    LogsComponent,
  ],
  providers: [LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
