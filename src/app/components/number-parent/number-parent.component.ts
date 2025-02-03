import { Component } from '@angular/core';
import { NumberHeaderComponent } from "../number-header/number-header.component";
import { NumberTableComponent } from "../number-table/number-table.component";
import { NumberFooterComponent } from "../number-footer/number-footer.component";

@Component({
  selector: 'app-number-parent',
  templateUrl: './number-parent.component.html',
  styleUrls: ['./number-parent.component.css'],
  imports: [NumberHeaderComponent, NumberTableComponent, NumberFooterComponent]
})
export class NumberParentComponent {

}
