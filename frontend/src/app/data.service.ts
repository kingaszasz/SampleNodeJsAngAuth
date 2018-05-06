import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
  url = 'http://localhost:3000/';
  data: any;
  constructor(private http: Http) { }

  getAll(table) {
    this.http.get(this.url + table).subscribe(
      data => {
        console.log(JSON.parse(data['_body']));
        this.data = JSON.parse(data['_body']);
      });
  }

  getOne(table, id) {
    this.http.get(this.url + table + '/' + id).subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      });
  }

  create(table, newData) {
    this.http.post(this.url + table, newData).subscribe(
      data => {
        console.log(data);
        this.getAll(table);
      });
  }

  update(table, id, data) {
    this.http.put(this.url + table + '/' + id, data).subscribe(
      data => {
        console.log(data);
        this.getAll(table);
      });
  }

  delete(table, id) {
    this.http.delete(this.url + table + '/' + id).subscribe(
      data => {
        console.log(data);
        this.getAll(table);
      });
  }
}
