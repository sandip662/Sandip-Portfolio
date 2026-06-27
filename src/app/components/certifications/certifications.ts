import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class Certifications {

  portfolio: any;

  constructor(private portfolioService: PortfolioService) {
    this.portfolio = this.portfolioService.getPortfolio();
  }

}