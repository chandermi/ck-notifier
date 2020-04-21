import { Component, OnInit } from '@angular/core';
import { NotificationEventService } from './notification.event.service';

@Component({
    selector: 'app-notifier',
    template: `<div (click)='closeNotification(i);' *ngFor="let item of notificationMessages; let i = index" [attr.data-index]="i"
    [ngClass]="{'errorMessage': item.type=='error',
    'warningMessage': item.type=='warning',
    'successMessage': item.type=='success',
    'infoMessage': item.type=='information',
    'notification':true}">
    <span class="closebtn">×</span>
    {{item.message}}
    </div>`,
    styleUrls: ['./notification.component.css']
  })
  export class NotificationComponent implements OnInit {
    public notificationMessages : NotificationModel[]=[];
  
    constructor(private notificationEventService: NotificationEventService    ) {
  
    }
    
    ngOnInit() {
      if (this.notificationEventService.subsVar==undefined) {    
        console.log(this.notificationEventService.subsVar);
        this.notificationEventService.subsVar = this.notificationEventService.    
        invokeMessageFunction.subscribe((data:any) => {    
            this.MessageFunction(data.message,data.messagetype);
        });    
      } 
    }
    MessageFunction(message,messagetype){
        
        this.notificationMessages.push({message:message,type:messagetype});
    }

    public closeNotification(index)
    {
     this.notificationMessages.splice(index,1)
    }

  }

  interface NotificationModel{
    message:string;
    type:string;
  }
