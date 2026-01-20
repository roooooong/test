import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  // loadingPratice
  loading$ = new Subject<string>();
  data!: string;
  show() {
    this.loading$.next(this.data);
    // this.loading$.next(true);
  }


  // //去建立一個可以被訂閱的值(不用帶初始值)
  // //並且這個值是boolean類型
  // private loading$ = new Subject<boolean>();

  // //要給初始值
  // private loading2$ = new BehaviorSubject<boolean>(false);

  // //asObservable()是用來開放可被訂閱的變數的訂閱功能(不能修改值)
  // _loading$ = this.loading$.asObservable();
  // _loading2$ = this.loading$.asObservable();
  // constructor() { }

  // show() {
  //   this.loading$.next(true);
  //   // this.loading$.next(true);
  // }

  // hide() {
  //   this.loading$.next(false);
  //   // this.loadin2g$.next(false);
  // }
}
