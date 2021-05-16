import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // this.getUsers();
  }
  title: string = 'The title property';
  users: any;

  constructor(private http: HttpClient) { }

  getUsers() {
    this.http.get('https://localhost:44306/character/getall').subscribe(
      response => {
        console.log(response);
        this.users = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
