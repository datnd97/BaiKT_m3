import { Injectable } from '@angular/core';
import {Observable} from "rxjs";


class Book {
  id:number;
  name:string;
  read:boolean;
}

const BOOK: Book[] = [
  {id:1,name:'Elon Musk',read:true},
  {id:2,name:'Getting Things Done',read:true},
  {id:3,name:'Long Kinh',read:true},
  {id:4,name:'Sapiens',read:true},
  {id:5,name:'Toi di Code dao',read:false},
  {id:6,name:'Hoc nghe',read:false},
  {id:7,name:'Clean code',read:false},
]

@Injectable()
export class BookService{
  getAll() {
    return  BOOK;
  }
  get(id:number) :Book{
    return this.clone(BOOK.find(p=>p.id ===id));
  }
  save(book:Book){
    let originalBook = BOOK.find(p =>p.id === p.id);
    if(originalBook) Object.assign(originalBook,book);
  }
  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }
  constructor() { }
}
