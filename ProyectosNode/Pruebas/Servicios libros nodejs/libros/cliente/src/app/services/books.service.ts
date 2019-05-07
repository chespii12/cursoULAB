import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  list:any[];

  constructor(public http:HttpClient) { }

  get() {
    this.http.get("http://localhost:8080/libros/").subscribe((data:any) => {
      this.list = data;
      console.log(this.list);
    });    
  }

  add(book:any) {
    this.http.post("http://localhost:8080/libros/", book).subscribe((data:any) => {
      this.get();
    });
  }
}
