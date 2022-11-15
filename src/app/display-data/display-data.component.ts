import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css'],
})
export class DisplayDataComponent implements OnInit {
  constructor() {}
  userDetailsObj: any[] = [];

  ngOnInit(): void {
    const localStorageObj = localStorage;
    const localstoragekeys = Object.keys(localStorageObj);

    for (var i = 0; i < localstoragekeys.length; i++) {
      const key = localstoragekeys[i];
      const userDetailsString = localStorageObj[key];
      this.userDetailsObj.push(JSON.parse(userDetailsString));
    }
    console.log(this.userDetailsObj);
  }
}
