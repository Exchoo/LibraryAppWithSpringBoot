package com.libraryapp.Libraryapp.repository;

import com.libraryapp.Libraryapp.model.Book;
import com.libraryapp.Libraryapp.model.Manager;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookRepository extends JpaRepository<Book,Long> {
    Optional<Book> findBookById(Long id);
}
