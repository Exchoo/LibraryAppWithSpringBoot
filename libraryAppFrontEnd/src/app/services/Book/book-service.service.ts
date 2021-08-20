import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})

export class BookServiceService {
  private API_SERVER="http://localhost:8080";
  constructor(private http:HttpClient) { }


  public getBooks() : Observable<Book[]>{ //employee.ts interface'sinde oluşturduğumuz değişkenleri istiyor.
    return this.http.get<Book[]>(this.API_SERVER+'/book/all');
 }

 public addBooks(book:Book) : Observable<Book>{ 
  return this.http.post<Book>(this.API_SERVER+'/book/add',book);
}

public updateBooks(book:Book) : Observable<Book>{ 
  return this.http.put<Book>(this.API_SERVER+'/book/update',book);
}

public deleteBooks(bookId:any) : Observable<any>{ 
  return this.http.delete<void>(this.API_SERVER+'/book/delete/'+bookId); //Buraya Bak
}

public getBooksById(id:any): Observable<void>{
  return this.http.get<void>(this.API_SERVER+'/book/find/'+id);
}




}
