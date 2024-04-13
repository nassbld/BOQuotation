import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {QuotationService} from "../service/quotation.service";
import {IQuote} from "../types/iquote";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatChip, MatChipListbox, MatChipOption, MatChipSelectionChange} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-quotation-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardContent,
    MatCard,
    NgOptimizedImage,
    MatTab,
    MatTabGroup,
    MatChipListbox,
    MatChipOption,
    MatIcon,
    MatIconButton
  ],
  providers: [
    QuotationService
  ],
  templateUrl: './quotation-list.component.html',
  styleUrl: './quotation-list.component.css'
})
export class QuotationListComponent implements OnInit{
  quotes: IQuote[] | undefined;
  treatedChipSelected: boolean | undefined;
  waitingChipSelected: boolean | undefined;

  constructor(private service: QuotationService) {
  }

  ngOnInit(): void {
    this.service.getQuote().subscribe(
      quotes => this.quotes = quotes
    )
    this.treatedChipSelected = true;
    this.waitingChipSelected = true;
  }

  treatedToggle($event: MatChipSelectionChange) {
    this.treatedChipSelected = $event.selected
    console.log(this.treatedChipSelected)
  }

  waitingToggle($event: MatChipSelectionChange) {
    this.waitingChipSelected = $event.selected
    console.log(this.waitingChipSelected)
  }

  isTreated(quote: IQuote): boolean {
    console.log(quote.quotation)
    return quote.quotation !== null && quote.quotation !== undefined;
  }

  deleteQuote(quoteId: string) {
    this.service.deleteQuote(quoteId)
  }
}
