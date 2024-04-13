import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {QuotationListComponent} from "./quotation-list/quotation-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuotationListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'boquotation';
}
