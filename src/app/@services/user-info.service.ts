import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  userName!: string;
  userEmail!: string;
  userMessage!: string;

  constructor() { }
}
