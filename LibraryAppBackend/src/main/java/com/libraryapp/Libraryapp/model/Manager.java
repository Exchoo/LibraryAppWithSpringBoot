package com.libraryapp.Libraryapp.model;

import javax.persistence.*;
import java.io.Serializable;
@Entity
public class Manager implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String name;
    private String pass;
    private String imageUrl;
    private String email;
    @Enumerated
    private Status status;

    @Column(name = "aktif")
    private boolean aktif;

    @Column(nullable = false,updatable = false)
    private String employeeCode;

     enum Status{
        MANAGER,
        EMPLOYEE
    };


    public Manager(){}

    public Manager(String name, String pass, String imageUrl, Status status, boolean aktif, String employeeCode, String email) {
        this.name = name;
        this.email=email;
        this.pass = pass;
        this.imageUrl = imageUrl;
        this.status = status;
        this.aktif = aktif;
        this.employeeCode = employeeCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(String employeeCode) {
        this.employeeCode = employeeCode;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public boolean isAktif() {
        return aktif;
    }

    public void setAktif(boolean aktif) {
        this.aktif = aktif;
    }

    @Override
    public String toString() {
        return "Manager{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", pass='" + pass + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", email='" + email + '\'' +
                ", status=" + status +
                ", aktif=" + aktif +
                ", employeeCode='" + employeeCode + '\'' +
                '}';
    }
}
