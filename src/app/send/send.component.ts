import { UserInfoService } from './../@services/user-info.service';
import { Component, Input, output } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-send',
  imports: [RouterOutlet],
  templateUrl: './send.component.html',
  styleUrl: './send.component.scss'
})
export class SendComponent {

  constructor(
    private router: Router,
    private userInfoService: UserInfoService
  ) { }

  @Input() userName = '123';
  @Input() userEmail!:string;
  @Input() userMessage!:string;

  // userName!: string;
  // userEmail!: string;
  // userMessage!: string;

  // userInfo = output<any>()

  sendData() {

    alert('傳送完成');
    this.router.navigateByUrl('message');
  }

  back() {
    this.userName = this.userInfoService.userName;
    this.userEmail = this.userInfoService.userEmail;
    this.userMessage = this.userInfoService.userMessage;
    // this.userInfo.emit(this.userName);
    // this.userInfo.emit(this.userEmail);
    // this.userInfo.emit(this.userMessage);
    this.router.navigateByUrl('message');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userName = this.userInfoService.userName;
    this.userEmail = this.userInfoService.userEmail;
    this.userMessage = this.userInfoService.userMessage;
    console.log('send' + this.userName)
    console.log('send' + this.userEmail)
    console.log('send' + this.userMessage)
  }
  // test(event: any){
  //   // console.log(event);
  //   this.userName = event.userName;
  //   this.userEmail = event.userEmail;
  //   this.userMessage = event.userMessage;
  // }

}
