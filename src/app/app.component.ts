import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  constructor(
    private http: HttpClient
  ) {}


  ngOnInit() {
    this.http.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
      .subscribe({
        next: (res) => {
          console.log(res)
        },
        error: (err) => {
          console.log(err)
        }
      })
  }


}
