import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/////上面這區塊 是用來告訴系統這隻檔案是大家共用的
/////因為上面這區塊 在專案一開始執行的時候 就會把這隻檔案執行放後台

export class ExampleService {

  sendData!: string;

  userName!: string;
  userEmail!: string;
  userAge!: number;

  constructor() { }
}
