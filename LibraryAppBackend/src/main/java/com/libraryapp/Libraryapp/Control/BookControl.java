package com.libraryapp.Libraryapp.Control;

import com.libraryapp.Libraryapp.model.Book;
import com.libraryapp.Libraryapp.model.Manager;
import com.libraryapp.Libraryapp.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
public class BookControl {

    private final BookService bookService;

    @Autowired
    public BookControl(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Book>> getAllBooks(){ //ResponseE. içine direkt manager list alıyor
        List<Book> books = bookService.findAllBook();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Book>getBooksById(@PathVariable("id") Long id){ //ResponseE. içine direkt manager alıyor
        Book books= bookService.findBookById(id);
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Book> addBook(@RequestBody Book book){
        Book newBook= bookService.addBook(book);
        return new ResponseEntity<>(newBook, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Book> updateBook(@RequestBody Book book){
        Book updateBook= bookService.updateBook(book);
        return new ResponseEntity<>(updateBook, HttpStatus.OK);
    }

    @DeleteMapping(value="/delete/{id}")
    public ResponseEntity<Boolean> deleteBook(@PathVariable("id") Long id){
        bookService.deleteBookById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
