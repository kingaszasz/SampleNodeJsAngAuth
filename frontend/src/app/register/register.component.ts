import { Component, OnInit } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

// import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.pug',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  table = 'users/register';
  url = 'http://localhost:3000/';
  data: any;
  newUser = {
    username: '',
    email: '',
    address: '',
    password: '',
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  register() {
    console.log(this.newUser);
    this.http.post(this.url + this.table, this.newUser).subscribe(
      data => {
        console.log(data);
      });
  }
}
