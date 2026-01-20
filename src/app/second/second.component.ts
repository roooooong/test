import { ExampleService } from './../@service/example.service';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FirstComponent } from '../first/first.component';

@Component({
  selector: 'app-second',
  imports: [FormsModule,FirstComponent],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {

  @Input() inputData2!: string;
  userName!: string;
  userEmail!: string;
  userAge!: number;

  //相依注入 - 建構式
  constructor(
    private router: Router,
    private exampleService: ExampleService
    ){}

  //用來傳遞資料跟切換頁面
  sendData(){
    this.exampleService.userName = this.userName;
    this.exampleService.userEmail = this.userEmail;
    this.exampleService.userAge = this.userAge;
    this.router.navigateByUrl('first');
  }
}
