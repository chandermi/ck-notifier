import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationComponent } from './Component/Notification/notification.component';
import { NotificationEventService } from './Component/Notification/notification.event.service';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [NotificationEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
