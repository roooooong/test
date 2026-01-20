import { UserInfoService } from './../@services/user-info.service';
import { Component, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SendComponent } from '../send/send.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-message',
  imports: [FormsModule, SendComponent, RouterOutlet],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {

  @Input() userName!: string;
  @Input() userEmail!: string;
  @Input() userMessage!: string;

  constructor(
    private router: Router,
    private userInfoService: UserInfoService
  ) { }

  userInfo = output<any>()

  // sendData() {
  //   this.userInfo.emit({
  //     userName: this.userName2,
  //     userEmail: this.userEmail2,
  //     userMessage: this.userMessage2
  //   })
  //   this.router.navigateByUrl('send');
  // }

  // test(event: any){
  //   // console.log(event);
  //   this.userName = event.userName;
  //   this.userEmail = event.userEmail;
  //   this.userMessage = event.userMessage;
  // }

  sendData() {
    // this.userInfo.emit(this.userName);
    // this.userInfo.emit(this.userEmail);
    // this.userInfo.emit(this.userMessage);
    this.userInfoService.userName = this.userName;
    this.userInfoService.userEmail = this.userEmail;
    this.userInfoService.userMessage = this.userMessage;
    this.router.navigateByUrl('send');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userInfoService.userName = this.userName;
    console.log(this.userName);
    console.log(this.userInfoService.userName);

  }
}
