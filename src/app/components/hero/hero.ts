import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

  portfolio: any;

  constructor(private portfolioService: PortfolioService) {
    this.portfolio = this.portfolioService.getPortfolio();
  }

}