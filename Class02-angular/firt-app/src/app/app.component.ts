import { Component } from '@angular/core';
import { User } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My first Angular Application';
  randomNumber: number = 70;

  user = {} as User;

  receivedData: string = '';


  userTwo: User = {
    firstName: 'Jill',
    lastName: 'Wayne',
    age: 30
  }

  constructor() {
    this.user.firstName = 'Bob';
    this.user.lastName = 'Bobsky';
    this.user.age = 25;
  }

  favoriteColor: string = 'red';
  imageUrl: string = 'https://m.media-amazon.com/images/I/71BgdzmFDAL.jpg';

  onTitleChange():void {
    this.title = 'Title has changed!'
  }

  onSelectRandomNumber(): void {
    this.randomNumber = Math.floor(Math.random()*100);
  }

  onDataReceive(receivedData: string): void {
    this.receivedData = receivedData;
  }

}
