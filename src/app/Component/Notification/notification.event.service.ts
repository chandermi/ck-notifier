import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class NotificationEventService {    
    
  invokeMessageFunction = new EventEmitter();    
  subsVar: Subscription;    
  
  constructor() { }    
    
  raiseMessage(message,messagetype) {  
    
    this.invokeMessageFunction.emit({message:message,messagetype:messagetype});    
  }    
}    