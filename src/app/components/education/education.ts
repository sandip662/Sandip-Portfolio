import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
 portfolio: any;

  constructor(private portfolioService: PortfolioService) {
    this.portfolio = this.portfolioService.getPortfolio();
  }
}
