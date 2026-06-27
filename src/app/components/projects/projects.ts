import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  portfolio: any;

  constructor(private portfolioService: PortfolioService) {
    this.portfolio = this.portfolioService.getPortfolio();
  }

}