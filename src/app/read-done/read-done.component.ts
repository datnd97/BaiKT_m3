import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
class Book {
  id:number;
  name:string;
  read:boolean;
}
@Component({
  selector: 'app-read-done',
  templateUrl: './read-done.component.html',
  styleUrls: ['./read-done.component.css']
})
export class ReadDoneComponent implements OnInit {

  books:Book[];
  getBookFromService():void{
    this.books = this.bookService.getAll();
  }
  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.getBookFromService();
  }

}
