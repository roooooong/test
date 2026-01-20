import { Component } from '@angular/core';
import { HttpClientService } from '../@service/http-client.service';
import { Weather } from '../@interface/weather';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taipei',
  imports: [RouterLinkActive, RouterOutlet, CommonModule,RouterLink],
  templateUrl: './taipei.component.html',
  styleUrl: './taipei.component.scss'
})
export class TaipeiComponent {
  
 locationName = "新營區";
  WeatherElement = "溫度";
  district = 0;
  option = 0;

  changrDistrict!: Array<any>;
  changeOption!: Array<any>;
  Location!: Array<any>;
  Time!: Array<any>;

  //清空陣列
  clearArray!: Array<any>;

  //interface
  resData!: Weather;
  //  resData!:any;

  constructor(
    private httpClientService: HttpClientService
  ) { }

  //改地區效果
  isActiveLocation: boolean[] = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  booleanDataL = this.isActiveLocation;

  // 改氣象效果
  isActiveWeather: boolean[] = [true, false, false, false, false, false, false, false, false, false];
  booleanDataW = this.isActiveWeather;

  changeL = 0;
  changeW = 0;


  testL(district: number): string {
    if (this.booleanDataL[district]) {
      return 'hv4'
    }
    else {
      return 'button'
    }
  }

  testW(option: number): string {
    if (this.booleanDataW[option]) {
      return 'hv4'
    }
    else {
      return 'button'
    }
  }

  //改地區
  changeLocationName(locationName: string, district: number) {
    this.locationName = locationName;
    this.district = district;
    this.changeOption = this.clearArray;
    this.changeOption = this.Location[this.district].WeatherElement[this.option].Time;

    this.booleanDataL[this.changeL] = !this.booleanDataL[this.changeL];
    this.booleanDataL[this.district] = !this.booleanDataL[this.district];
    this.changeL = district;
  }
  //改氣象
  changeWeatherElement(WeatherElement: string, option: number) {
    this.WeatherElement = WeatherElement;
    this.option = option;
    this.changeOption = this.clearArray;
    this.changeOption = this.Location[this.district].WeatherElement[this.option].Time;

    this.booleanDataW[this.changeW] = !this.booleanDataW[this.changeW];
    this.booleanDataW[this.option] = !this.booleanDataW[this.option];
    this.changeW = option;
  }

  // 呈現數據
  present() {
    // this.changrDistrict = this.Location[this.district];
    this.changeOption = this.Location[this.district].WeatherElement[0].Time;
    this.changeOption = this.Location[this.district].WeatherElement[this.option].Time;
  }

  ngOnInit(): void {
    //呼叫API的時候 系統不會等待API回應再繼續執行
    //所以必須使用到訂閱(subscribe)來等API回應內容再繼續執行
    //(res) res是自己取名的區域變數，用來代表API回應給你的內容
    this.httpClientService.getApi("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=CWA-F87F1543-97BC-4322-B779-633AB14E5ADA")
      .subscribe((res: any) => {
        console.log(res);
        this.resData = res;
        console.log(this.resData.records);

        console.log(res.records.Locations[0]);
        this.Location = res.records.Locations[0].Location;
        console.log("sss", this.Location);
        this.changeOption = this.Location[this.district].WeatherElement[0].Time;
        console.log("陣列:", this.changeOption);
      });
  }
}
