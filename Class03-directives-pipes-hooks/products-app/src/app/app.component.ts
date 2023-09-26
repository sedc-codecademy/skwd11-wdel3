import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'products-app';

  valueFromParent: string = 'String passed from parent';

  ngOnInit(): void {
    console.log('Value from parent: ', this.valueFromParent);
  }
}
