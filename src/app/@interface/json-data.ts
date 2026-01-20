// //有export別的頁面才抓的到
// export interface JsonData {

//   name: string;
//   age?: number;
//   getName(): string;

//   //可以寫事件 但要去那個頁面 加上 implements JsonData (此時前面會報錯 要在加上以下)
//   // name!:string;
//   // age!: number;
//   // getName(): string{
//   //   return '';
//   // }

// }

export interface User {
  userName: string,
  lev: number,
  props: Array<Props>
}

export interface Props {
  propsName: string,
  amount: number,
}
