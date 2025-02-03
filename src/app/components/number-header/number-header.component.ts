import { Component } from '@angular/core';

@Component({
  selector: 'app-number-header',
  imports: [],
  templateUrl: './number-header.component.html',
  styleUrl: './number-header.component.css'
})
export class NumberHeaderComponent {
  numberDetails = {
    number: '012345678910',
    country: 'الأردن',
    provider: 'فودافون مصر',
    lastRecharge: '29/12/2024',
    balance: '5000 ج.م'
  };
}
