import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  portfolio: any;

  constructor(private portfolioService: PortfolioService) {
    this.portfolio = this.portfolioService.getPortfolio();
  }

}