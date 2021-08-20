package com.libraryapp.Libraryapp.model;

import javax.persistence.*;
import java.io.Serializable;
@Entity
public class Book implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long barkodNo;
    private String name;
    private String author;
    private String publisher;

    private Boolean status=true;

    @Enumerated
    private Book.Type type;

    enum Type {
        Cocuk,
        Edebiyat,
        Roman,
        Siir,
    };

    public Book(Long barkodNo, String name, String author, String publisher, Type type, Boolean status) {
        this.barkodNo = barkodNo;
        this.name = name;
        this.status=status;
        this.author = author;
        this.publisher = publisher;
        this.type = type;
    }

    public Book(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getBarkodNo() {
        return barkodNo;
    }

    public void setBarkodNo(Long barkodNo) {
        this.barkodNo = barkodNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", barkodNo=" + barkodNo +
                ", name='" + name + '\'' +
                ", author='" + author + '\'' +
                ", publisher='" + publisher + '\'' +
                ", status=" + status +
                ", type=" + type +
                '}';
    }
}
