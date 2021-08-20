package com.libraryapp.Libraryapp.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Member implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long tc_no;
    private String name;
    private String surname;
    private String pass;
    private String imageUrl;
    private Long kitapIdOne;
    private Long kitapIdTwo;
    private Long kitapIdThree;

    @Enumerated
    private Member.Status status;

    @Column(name = "aktif")
    private boolean aktifMi;

    @Column(nullable = false,updatable = false)
    private String MemberCode;



    enum Status{
        NORMAL,
        STUDY
    };

    public Member() {

    }

    public Member(Long tc_no, String name, String surname, String pass, String imageUrl, Long kitapIdOne, Long kitapIdTwo, Long kitapIdThree, Status status, boolean aktifMi, String memberCode) {
        this.tc_no = tc_no;
        this.name = name;
        this.surname = surname;
        this.pass = pass;
        this.imageUrl = imageUrl;
        this.kitapIdOne = kitapIdOne;
        this.kitapIdTwo = kitapIdTwo;
        this.kitapIdThree = kitapIdThree;
        this.status = status;
        this.aktifMi = aktifMi;
        MemberCode = memberCode;
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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
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

    public Member.Status getStatus() {
        return status;
    }

    public void setStatus(Member.Status status) {
        this.status = status;
    }

    public boolean isAktifMi() {
        return aktifMi;
    }

    public void setAktifMi(boolean aktifMi) {
        this.aktifMi = aktifMi;
    }

    public String getMemberCode() {
        return MemberCode;
    }

    public void setMemberCode(String memberCode) {
        MemberCode = memberCode;
    }

    public Long getTc_no() {
        return tc_no;
    }

    public void setTc_no(Long tc_no) {
        this.tc_no = tc_no;
    }

    public Long getKitapIdOne() {
        return kitapIdOne;
    }

    public void setKitapIdOne(Long kitapIdOne) {
        this.kitapIdOne = kitapIdOne;
    }

    public Long getKitapIdTwo() {
        return kitapIdTwo;
    }

    public void setKitapIdTwo(Long kitapIdTwo) {
        this.kitapIdTwo = kitapIdTwo;
    }

    public Long getKitapIdThree() {
        return kitapIdThree;
    }

    public void setKitapIdThree(Long kitapIdThree) {
        this.kitapIdThree = kitapIdThree;
    }

    @Override
    public String toString() {
        return "Member{" +
                "id=" + id +
                ", tc_no=" + tc_no +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", pass='" + pass + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", kitapIdOne=" + kitapIdOne +
                ", kitapIdTwo=" + kitapIdTwo +
                ", kitapIdThree=" + kitapIdThree +
                ", status=" + status +
                ", aktifMi=" + aktifMi +
                ", MemberCode='" + MemberCode + '\'' +
                '}';
    }
}
