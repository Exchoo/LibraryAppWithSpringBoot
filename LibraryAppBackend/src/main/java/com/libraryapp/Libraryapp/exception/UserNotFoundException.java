package com.libraryapp.Libraryapp.exception;

public class UserNotFoundException  extends  RuntimeException{
    public UserNotFoundException(String message){
        super(message);
    }
}
