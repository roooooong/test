import { MessageComponent } from './message/message.component';
import { HttpClientService } from './@service/http-client.service';
import { Component,inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from './@interface/json-data';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { DialogComponent } from './@dialog/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from './@service/loading.service';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive, MatTabsModule, MatButtonModule, MessageComponent,MatProgressSpinnerModule,
    MatSidenavModule,MatToolbarModule,  MatIconModule,
  FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo2';
showFiller = false;
loading :boolean = false;
//   // 彈出dialog
//   readonly dialog = inject(MatDialog);
//   showDialog(){

//     //let dialogRef 是宣告一個變數 讓系統知道我們現在要接收哪個dialog
//     //(要開啟的dialog頁面的名稱, {要傳遞的值和設定})
//     let dialogRef = this.dialog.open(DialogComponent, {
//       data: 'Eric',
//       width: '200px',
//       height: '250px'
//     });
//     //去偵測dialogRef這個dialog甚麼時候關閉
//     //如果dialog結束有傳值出來 res就是那個值
//     dialogRef.afterClosed().subscribe((res) => {
//       //如果有值傳遞出來
//       if(res){
//         // setTimeout(()=>{
//         console.log(res);
//         // },3000)
//       }
//     })
//   }

//   showloading(){
//   this.loadingService.show();
// }

  //建構式 要使用Router套件 一定要先宣告一個建構式constructor
  //正常會寫private 在TS自己使用 ;
  // constructor(private 自己命名的變數名稱: 套件名稱)
  constructor(
    private router: Router,
    private httpClientService: HttpClientService,
    private loadingService:LoadingService
  ) { }

  data!:string;

  changePage(url: string) {
    // 以下兩個方法一樣 二選一使用
    // this.router.navigate([url]);
    this.router.navigateByUrl(url);
  }

  // links = ['First', 'Second', 'Third'];
  links = [{
    page: 'Weather',
    a: '/weather'
  },
  {
    page: 'level',
    a: '/level'
  },
  {
    page: 'BMI',
    a: '/bmi'
  }]

  activeLink = this.links[0].page;

  ngOnInit(): void {
// this.loadingService._loading$.subscribe((res) =>{
//  console.log(res);
// })

this.loadingService.loading$.subscribe((res) =>{
 console.log(res);
})


    //呼叫API的時候溫欸系統不會等待API回應再繼續執行
    //所以必須使用到訂閱(subscribe)來等API回應內容再繼續執行
    //(res) res是自己取名的區域變數，用來代表API回應給你的內容
    // this.httpClientService.getApi("https://api.freeapi.app/api/v1/public/randomusers")
    // .subscribe((res) =>{
    //   console.log(res);
    // });

    // this.httpClientService.postApi("https://api.freeapi.app/api/v1/kitchen-sink/http-methods/post",{/*name:'Allen'*/})
    // .subscribe((res) =>{
    //   console.log(res);
    // });

    //政府天氣API串接
    // this.httpClientService.getApi("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-F87F1543-97BC-4322-B779-633AB14E5ADA")
    // .subscribe((res) =>{
    //   console.log(res);
    // });


    this.ELEMENT_DATA = this.ELEMENT_DATA.sort((a, b) => {
      if (a.weight < b.weight) {
        return -1;
      }
      else if (a.weight > b.weight) {
        return 1;
      }
      else {
        return 0;
      }
    });

    // console.log(this.ELEMENT_DATA);

  }

  ELEMENT_DATA = [
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  ];



  //原本是 jasonData: any  在jasonData.後面系統不會跑出name或age的選項
  //寫完interface 把any改成interface的型態後 因為interface裡有給型態 這時候jasonData.後面系統就會跑出name或age的選項了
  //但此時interface裡有甚麼欄位 jasonData裡就要有甚麼欄位
  //如果有些可有可無 jasonData裡的數字可以給0 字串可以給''(空字串)
  //或是在interface的屬性和:之間加上 ?
  // jasonData: JsonData = {
  //   name: 'Allem',
  //   age: 0
  // }

  // name!:string;
  // age!: number;
  // getName(): string{
  //   return '';
  // }




  //   interface 練習
  //   userArray: Array<User> = [
  //     {
  //       userName: '玩家A',
  //       lev: 18,
  //       props: [
  //         {
  //           propsName: '蘑菇',
  //           amount: 5,
  //         },
  //         {
  //           propsName: '金幣',
  //           amount: 15,
  //         }
  //       ]
  //     }
  //   ]



}

// interface  JasonData{
//   name: string;
//   age?: number;
// }

