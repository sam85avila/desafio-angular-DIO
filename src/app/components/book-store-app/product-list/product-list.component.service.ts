import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Book } from "../model/book";

export const books: Book[] = [
    { id: '1', name: 'Box Sherlock Holmes' , price: 119.99, quantity: 1, category: "Acao/Investigação", img:"img1"},
    { id: '2', name: 'O Mundo de Sofia' , price: 13.99, quantity: 1, category: "Fantasia", img:"img2"},
    { id: '3', name: 'Arsene Lupin' , price: 49.99, quantity: 1, category: "Acao/Aventura", img:"img3"},

  ];

@Injectable()

export class BookService{
    // private url = '';

    // httpOption = {
    //     Headers: new HttpHeaders({'content-type': 'application/json'})
    // }

    constructor(){}
    // constructor(private http:HttpClient){}

    getBook(){
        return books;
    }
    
    // getBook() {
    //     return this.http.get(this.url);
    // }

}
