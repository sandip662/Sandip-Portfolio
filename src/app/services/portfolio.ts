import { Injectable } from '@angular/core';
import { PORTFOLIO_DATA } from '../../assets/portfolio-data';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  getPortfolio() {
    return PORTFOLIO_DATA;
  }
}