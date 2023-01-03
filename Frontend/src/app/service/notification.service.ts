import { Injectable } from '@angular/core';
import * as toastr from 'toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor() { }

  showErrorMessage(message: string) {
    toastr.error(message, 'Error', {
      closeButton: true,
      positionClass: 'toast-bottom-right',
      timeOut:2500,
    });
  }






}



