import { Component,  AfterViewInit } from '@angular/core';
import { NotificationEventService } from './Component/Notification/notification.event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ck-notifier';
  constructor(private notificationEventService: NotificationEventService    ) {
  }
  ngAfterViewInit() {
    this.notificationEventService.raiseMessage("Welcome to the site","success");
  }
  reportMessage(messagetype){
    this.notificationEventService.raiseMessage("Reported "+messagetype+" Message",messagetype);
  }
}
