import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input()
  userData = {} as User;

  @Output()
  dataToBeSent: EventEmitter<string> = new EventEmitter();

  onSendData(data: string): void {
    this.dataToBeSent.emit(data);
  }

}
