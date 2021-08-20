package com.libraryapp.Libraryapp.service;

import com.libraryapp.Libraryapp.exception.UserNotFoundException;
import com.libraryapp.Libraryapp.model.Book;
import com.libraryapp.Libraryapp.model.Manager;
import com.libraryapp.Libraryapp.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BookService {
    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book addBook(Book book){
        return bookRepository.save(book); //employee'yi kaydeder
    }

    public List<Book> findAllBook(){
        return bookRepository.findAll();
    }

    public Book updateBook(Book book){
        return  bookRepository.save(book);
    }

    public Book findBookById(Long id) {
        return bookRepository.findBookById(id).orElseThrow(()-> new UserNotFoundException( "User by ıd "+ id +"was not found.")); //UserNotFound'un classını biz oluşturduk.
    }

    public void deleteBook(Long id){
        bookRepository.deleteById(id);
    }

    public void deleteBookById(Long id){
        bookRepository.deleteById(id);
    }


}
