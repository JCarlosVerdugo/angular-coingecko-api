import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface Coin{
  exchangeId:            string;
  rank:                  string;
  baseSymbol:            string;
  baseId:                string;
  quoteSymbol:           string;
  quoteId:               string;
  priceQuote:            string;
  priceUsd:              string;
  volumeUsd24Hr:         string;
  percentExchangeVolume: string;
  tradesCount24Hr:       string;
  updated:               number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  coins: Coin[] = [];
  filteredCoins: Coin[] = [];
  titles: string[] = [
    '#',
    'Coin',
    'Price',
    'Price Change',
    '24h Volume',
  ];
  searchText = '';

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    // this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin')
    this.http.get<Coin[]>('https://api.coincap.io/v2/markets')
      .subscribe({
        next: (res: any) => {
          this.coins = res.data;
          this.filteredCoins = res.data;
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  Number(text: string) {
    return Number(text);
  }


  searchCoin() {
    this.coins = this.filteredCoins.filter(coin =>
      coin.baseId.toLowerCase().trim().includes(this.searchText)
    );
  }


}
