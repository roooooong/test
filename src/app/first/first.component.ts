import { ExampleService } from './../@service/example.service';
import { Component, Input } from '@angular/core';
import { RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-first',
  providers: [provideNativeDateAdapter()],
  imports: [RouterOutlet, MatTableModule, MatPaginatorModule, MatIconModule, FormsModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, CommonModule, MatTabsModule, MatButtonModule,
    MatSelectModule, MatFormFieldModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {



  selected = 'option2';

  selectAnimal!: string;

  selectArray = [
    { name: 'Allen', value: 'A' },
    { name: 'Ben', value: 'B' },
    { name: 'Eric', value: 'E' }
  ]

  // @Input() 告訴系統這個全域變數「可能」會是外面傳遞進來的資料
  @Input() inputData2!: string;

  inputData!: string;
  inputKeyup() {
    console.log(this.inputData);
    let tridyData = [];
    for (let data of ELEMENT_DATA) {
      // 用name做篩選
      if (data.name.indexOf(this.inputData) != -1) {
        tridyData.push(data);
      }
    }
    console.log(tridyData);
    this.dataSource.data = tridyData;
  }

  booleanData: boolean = false;
  chandgNgClass() {
    this.booleanData = !this.booleanData;
  }
  test(): string {
    if (this.booleanData) {
      return 'h3Css'
    }
    else {
      return 'h3Css2'
    }
  }

  day!: Array<string>;
  day1!: string;
  day2!: string;

  userName!: string;
  userEmail!: string;
  userAge!: number;

  constructor(
    private router: Router,
    private exampleService: ExampleService) {
  }

  back() {
    this.router.navigateByUrl('second');
  }

chartArray = [
    {
      id: '1',
      labels: ['餐費', '交通費', '租金'],
      label: '支出比',
      data: [12000, 3000, 9000],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ]
    },
    {
      id: '2',
      labels: ['早餐', '午餐', '晚餐'],
      label: '費用',
      data: [30, 120, 180],
      backgroundColor: [
        '#894343ff',
        '#894374ff',
        '#24c251ff',
      ]
    },
  ];

ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  for(let chartData of this.chartArray){
    // 獲取 canvas 元素
    //抓取資料 getElementById('chart')
    let ctx = document.getElementById(chartData.id) as HTMLCanvasElement;

    // 設定數據
    let data = {
      // x 軸文字
      labels: chartData.labels,
      datasets: [
        {
          // 上方分類文字
          label: chartData.label,
          // 數據
          data: chartData.data,
          // 線與邊框顏色
          backgroundColor: chartData.backgroundColor,
          //設定hover時的偏移量，滑鼠移上去表會偏移，方便觀看選種的項目
          hoverOffset: 50,
        },
      ],
    };

    // 創建圖表
    let chart = new Chart(ctx, {
      //pie是圓餅圖,doughnut是環狀圖
      type: 'pie',
      data: data,
    });
  }
}

  ngOnInit(): void {

    // console.log(this.exampleService.sendData);
    this.userName = this.exampleService.userName;
    this.userEmail = this.exampleService.userEmail;
    this.userAge = this.exampleService.userAge;

    let newDay = '2026/1/2';
    //方法一: new date
    // let newDay2 = new Date(newDay);
    // this.day2 = this.day2 + newDay2.getFullYear() + '-';
    // if ((newDay2.getMonth() + 1) < 10) {
    //   this.day2 = this.day2 + '0' + (newDay2.getMonth()+1) + '-';
    // }
    // else {
    //   this.day2 = this.day2 + (newDay2.getMonth()+1) + '-';
    // }

    //  if ((newDay2.getDate() + 1) < 10) {
    //   this.day2 = this.day2 + '0' + (newDay2.getDate());
    // }
    // else {
    //   this.day2 = this.day2 + (newDay2.getDate());
    // }
    // console.log(this.day2);
    //日期格式抓月份是從0開始 所以要加一

    // this.day = newDay.split('/');
    // if( parseInt(this.day[1]) < 10 ){
    //   console.log(this.day[1]);
    //   this.day[1] = '0'+ this.day[1];
    //   console.log(this.day[1]);
    // }
    // if( parseInt(this.day[2]) < 10 ){
    //   this.day[2] = '0'+ this.day[2];
    // }

  }



  // constructor (private activatedRoute: ActivatedRoute){}

  // ngOnInit(): void {

  //   //router.ts撈值
  //   console.log(this.activatedRoute.snapshot.paramMap.get('id'));
  //   //網址後?id(變數名稱)=(取值)
  //   console.log(this.activatedRoute.snapshot.queryParamMap.get('id'));
  // }


  //angular material
  //dataSource 是 mat-table用來存放資料的地方 並且告訴系統資料(PeriodicElement)跟要傳入的資料內容(ELEMENT_DATA)
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'ID'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  ID: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { ID: "1", position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { ID: "1", position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { ID: "1", position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { ID: "1", position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { ID: "1", position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { ID: "1", position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { ID: "1", position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { ID: "1", position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { ID: "1", position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { ID: "1", position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { ID: "1", position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { ID: "1", position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { ID: "1", position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { ID: "1", position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { ID: "1", position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { ID: "1", position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { ID: "1", position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { ID: "1", position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { ID: "1", position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { ID: "1", position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
