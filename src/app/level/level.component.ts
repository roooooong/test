import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-level',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss'
})
export class LevelComponent {
  level: number = 1;
  attack: number = 10;
  defense: number = 10;
  changeLevel!: number;

  levelup() {
    this.level +=1;
    this.attack += 3;
    this.defense += 2;
  }

  leveldown() {
    if (this.level > 1) {
      this.level-=1;
      this.attack -= 3;
      this.defense -= 2;
    }
    else{
      alert("等級不能低於1");
    }
  }

  change() {
    if(this.changeLevel>1){
    this.level = this.changeLevel;
    this.attack = 10 + (this.changeLevel - 1) * 3;
    this.defense = 10 + (this.changeLevel - 1) * 2;
    }
    else{
      alert("等級不能低於1");
    }
  }
  restart() {
    this.level = 1;
    this.attack = 10;
    this.defense = 10;
  }
}
