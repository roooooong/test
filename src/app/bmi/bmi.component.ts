import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bmi',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './bmi.component.html',
  styleUrl: './bmi.component.scss'
})
export class BmiComponent {
  weight!: number;
  height!: number;
  BMI!: number;
  bmistatus!: string;
  health!: string;
  standard!: string;

  calculateBMI(weight: number, height: number) {
    this.BMI = weight / (height * height);
    if (this.BMI < 18.5) {
      this.bmistatus = '「 過輕 」';
    }
    if (this.BMI >= 18.5 && this.BMI < 24) {
      this.bmistatus = '「 正常 」';
    }
    if (this.BMI >= 24 && this.BMI < 27) {
      this.bmistatus = '「 過重 」';
    }
    if (this.BMI >= 27) {
      this.bmistatus = '「 肥胖 」';
    }
    // console.log('BMI : ' + this.BMI +', '+this.bmistatus);
    this.health = 'BMI為 : ' + this.BMI;
    this.standard = '結果 : ' + this.bmistatus;
  }
}
