import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './child-a/child-a.component';
import { BmiComponent } from './bmi/bmi.component';
import { LevelComponent } from './level/level.component';
import { ResumeComponent } from './resume/resume.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { SendComponent } from './send/send.component';
import { WeatherComponent } from './weather/weather.component';
import { TainanComponent } from './tainan/tainan.component';
import { KaohsiungComponent } from './kaohsiung/kaohsiung.component';
import { TaipeiComponent } from './taipei/taipei.component';
import { TaichungComponent } from './taichung/taichung.component';

//路由寫法是json格式
export const routes: Routes = [
  //{ path: "希望的頁面網址",想要呈現哪一個網頁的畫面: 要呈現的那個畫面}
  //path設定URL網址，component設定這個網址要呈現哪個頁面的內容
  { path: "first", component: FirstComponent,
    //嵌套路由和一般路由寫法一樣
    children: [
      { path: "child-a", component: ChildAComponent}
    ]
   },
  { path: "second", component: SecondComponent },
  //網址帶值 /:id
  { path: "first/:id", component: FirstComponent},

  { path: "bmi", component: BmiComponent},
  { path: "level", component: LevelComponent},
  { path: "resume", component: ResumeComponent},
  { path: "login", component: LoginComponent},
  { path: "message", component: MessageComponent},
  { path: "send", component: SendComponent},
  // { path: "weather", component: WeatherComponent}
  { path: "weather", component: WeatherComponent,
    children: [
      { path: "tainan", component: TainanComponent},
      { path: "kaohsiung", component: KaohsiungComponent},
      { path: "taipei", component: TaipeiComponent},
      { path: "taichung", component: TaichungComponent},
    ]
  }

  //重新導向
  //path設條件 redirectTo去設定符合條件你要導向到哪個網址
  //pathMatch是去設定網址要完全符合條件(full)還是開頭符合(prefix)
  // { path: "", redirectTo: "/first", pathMatch: "full"},

  //錯誤頁面
  //path:"**" 是用來設定錯誤頁面的 component一樣是設定要呈現的頁面內容
  // 錯誤頁面要放在路由的最下面
  // { path: "**", component: SecondComponent}
];
