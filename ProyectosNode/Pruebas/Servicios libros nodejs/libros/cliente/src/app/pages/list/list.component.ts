import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  search:string = '';

  constructor(public books:BooksService) { }

  ngOnInit() {
    this.books.get();
  }

}
