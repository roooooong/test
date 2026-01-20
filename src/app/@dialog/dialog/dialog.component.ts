import { Component, inject } from '@angular/core';
import { MatDialogTitle,MatDialogContent,MatDialogActions, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  imports: [MatDialogTitle,MatDialogContent,MatDialogActions],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  //讓這個dialogRef全域變數 等於你後面宣告的DialogComponent 後面要去做關閉才知道要關閉哪個dialog
  readonly dialogRef = inject (MatDialogRef<DialogComponent>);
  //讓全域變數用來接收你開啟dialog時傳遞進來的資料
  readonly data = inject<any> (MAT_DIALOG_DATA);

  //取消
  cancel(){
    this.dialogRef.close();
  }

  //確定
  certain(){
    this.dialogRef.close('Allen');
  }
}
