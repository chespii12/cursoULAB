import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {
  book:any = {id:0, titulo:'', autor:'', precio:0, img:'', url:''};

  constructor(public books:BooksService) { }

  ngOnInit() {
  }

  add() {
    console.log(this.book);
    this.books.add(this.book);
  }
}
