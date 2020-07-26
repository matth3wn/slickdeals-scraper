import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listOfDeals = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDeals();
  }
  getDeals() {
    return this.http.get<[{}]>('http://localhost:4000/').subscribe(data => this.listOfDeals = data);
  }
}
