import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgForm ,FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Manager } from 'src/app/services/manager';
import { Book } from 'src/app/services/book';
import { ManagerServiceService } from 'src/app/services/Manager/manager-service.service';
import { MemberServiceService } from 'src/app/services/Member/member-service.service';
import { Member } from 'src/app/services/member';
import { HttpErrorResponse } from '@angular/common/http';
import { BookServiceService } from 'src/app/services/Book/book-service.service';
import { NgbButtonLabel } from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBar} from '@angular/material/snack-bar';  
import {MatSnackBarModule} from '@angular/material/snack-bar';





@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  template:'<ng-content></ng-content>'
})
export class ManagerComponent implements OnInit {
  public managers!:Manager[];
  public members!:Member[];
  public books!:Book[];

  public editManager!:Manager;
  public editMember!:Member;
  public editBooks!:Book;

  public deleteManager!:Manager;
  public deleteMember!:Member;
  public deleteBooks!:Book;

  public issueBooks!:Book;
  public returnMember!:Member;
  public selectIdBook!:Book
  public selectedId!:any;;
  public i!:number;
  public j!:number;
 

  constructor(private managerService:ManagerServiceService,private memberService:MemberServiceService,private bookService:BookServiceService,private  _snackBar:MatSnackBar) { }

  public getManagers():void{ 
    this.managerService.getManagers().subscribe(
      (response:Manager[])=>{
        this.managers= response;
      },
        (error : HttpErrorResponse) =>{
          alert(error.message);
        }
    );
  }

  public getMembers():void{ 
    this.memberService.getMembers().subscribe(
      (response:Member[])=>{
        this.members= response;
      },
        (error : HttpErrorResponse) =>{
          alert(error.message);
        }
    );
  }

  public getBooks():void{ 
    this.bookService.getBooks().subscribe(
      (response:Book[])=>{
        this.books= response;
      },
        (error : HttpErrorResponse) =>{
          alert(error.message);
        }
    );
  }

  ngOnInit(): void {

    this.getManagers();
    this.getMembers();
    this.getBooks();

  }

  public onAddManager(addForm:NgForm):void{
    document.getElementById('add-manager-form')?.click(); //kişi ekle modal'ında Close buttonun id 'sini yazdık
      console.log(addForm.value.email); 
    this.managerService.addManagers(addForm.value).subscribe( //service'deki fonk'ları kullanarak kişi ekliyor 
      (response: Manager)=>{
        console.log(response);
        this.getManagers(); //Kişiyi getiriyor(Yani kişi ekledikten sonra table'ı yeniden çekerek güncelliyor.)
        addForm.reset();//Kişi ekledikten sonra form temizleniyor.
      }, 
      (error:HttpErrorResponse)=>{alert(error.message);addForm.reset();} 
      
      );
  }

  public onAddMember(addForm:NgForm):void{
    document.getElementById('add-member-form')?.click(); //kişi ekle modal'ında Close buttonun id 'sini yazdık. 
    this.memberService.addMember(addForm.value).subscribe( //service'deki fonk'ları kullanarak kişi ekliyor 
      (response: Member)=>{
        console.log(response);
        this.getMembers(); //Kişiyi getiriyor(Yani kişi ekledikten sonra table'ı yeniden çekerek güncelliyor.)
        addForm.reset();//Kişi ekledikten sonra form temizleniyor.
      }, 
      (error:HttpErrorResponse)=>{alert(error.message);addForm.reset();} 
      
      );
  }

  public onAddBook(addForm:NgForm):void{
    document.getElementById('add-book-form')?.click(); //kişi ekle modal'ında Close buttonun id 'sini yazdık. 
    this.bookService.addBooks(addForm.value).subscribe( //service'deki fonk'ları kullanarak kişi ekliyor 
      (response: Book)=>{
        console.log(response);
        this.getBooks(); //Kişiyi getiriyor(Yani kişi ekledikten sonra table'ı yeniden çekerek güncelliyor.)
        addForm.reset();//Kişi ekledikten sonra form temizleniyor.
      }, 
      (error:HttpErrorResponse)=>{alert(error.message);addForm.reset();} 
      
      );
  }

  public onUpdateManager(manager:Manager):void{
    this.managerService.updateManagers(manager).subscribe( 
      (response: Manager)=>{
        console.log(response);
        this.getManagers();
      }, 
      (error:HttpErrorResponse)=>{alert(error.message);} 
      );
  }

  public onUpdateMember(member:Member):void{
    this.memberService.updateMembers(member).subscribe( 
      (response: Member)=>{
        console.log(response);
        this.getMembers();
      }, 
      (error:HttpErrorResponse)=>{alert(error.message);} 
      );
  }

  public onUpdateBook(book:Book):void{
    this.bookService.updateBooks(book).subscribe( 
      (response: Book)=>{
        console.log(response);
        this.getBooks();
      }, 
      (error:HttpErrorResponse)=>{alert(error.message);} 
      );
  }


  public onDeleteManager(deleteManager:any){
    this.managerService.deleteManagers(deleteManager.id).subscribe( 
      (response)=>{ 
        console.log(response);
        if(response){
          this.deleteManager.pop(deleteManager.id);
        }
        this.getManagers();
      }, 

      (error:HttpErrorResponse)=>{alert(error.message);} 
      );
  }

  public onDeleteMember(deleteMember:any){
    this.memberService.deleteMembers(deleteMember.id).subscribe( 
      (response)=>{ 
        console.log(response);
        if(response){
          this.deleteMember.pop(deleteMember.id);
        }
        this.getMembers();
      }, 

      (error:HttpErrorResponse)=>{alert(error.message);} 
      );
  }

  public onDeleteBook(deleteBook:any){
    this.bookService.deleteBooks(deleteBook.id).subscribe( 
      (response)=>{ 
        console.log(response);
        if(response){
          this.deleteBooks.pop(deleteBook.id);
        }
        this.getBooks();
      }, 

      (error:HttpErrorResponse)=>{alert(error.message);} 
      );
  }

  public onOpenModal(manager:Manager|any,member:Member|any ,book:Book|any,mode: string):void{ //Employee|any yazmazsak hata veriyor , |null yazarsak çalışmıyor.
    const container=document.getElementById('main-container');  
    const button=document.createElement('button');
      button.type='button';
      button.style.display='none';
      button.setAttribute('data-toggle','modal');
      if( mode ==='add'){
        button.setAttribute('data-target','#addManagerModal');
      }
      if( mode ==='addMember'){
        button.setAttribute('data-target','#addMemberModal');
      }
      if( mode ==='addBook'){
        button.setAttribute('data-target','#addBookModal');
      }
      if( mode ==='edit'){
        this.editManager=manager;
        button.setAttribute('data-target','#updateManagerModal');
      }
      if( mode ==='editMember'){
        this.editMember=member;
        button.setAttribute('data-target','#updateMemberModal');
      }
      if( mode ==='editBook'){
        this.editBooks=book;
        button.setAttribute('data-target','#updateBookModal');
      }

      if( mode ==='delete'){
        this.deleteManager=manager;
        button.setAttribute('data-target','#deleteManagerModal');
      }
      if( mode ==='deleteMember'){
        this.deleteMember=member;
        button.setAttribute('data-target','#deleteMemberModal');
      }
      if( mode ==='deleteBook'){
        this.deleteBooks=book;
        button.setAttribute('data-target','#deleteBookModal');
      }
      if( mode ==='issueBook'){
        this.issueBooks=book;
        button.setAttribute('data-target','#ıssueBookModal');
      }
      if( mode ==='returnBook'){
        this.issueBooks=book;
        this.returnMember=member;
        button.setAttribute('data-target','#returnBookModal');
      }
     
     
      if(container)
        container.appendChild(button);
        button.click();    
  }

  public searchManagers(key:string):void { //Bu methodu html'de search'a ekle
    const result:Manager[]=[];
    for(const manager of this.managers){
      if(manager.name.toLowerCase().indexOf(key.toLowerCase())!==-1
      || manager.email.toLowerCase().indexOf(key.toLowerCase())!==-1
      ){
        result.push(manager);
      }
    }
    this.managers=result;
    if(result.length==0|| !key){ //Geri sildiğimizde ekrana hepsini tekrar getiriyor.
       this.getManagers();
    }
  }

  public searchMembers(key:string):void { //Bu methodu html'de search'a ekle
    const result:Member[]=[];
    for(const member of this.members){
      if(member.name.toLowerCase().indexOf(key.toLowerCase())!==-1
      || member.surname.toLowerCase().indexOf(key.toLowerCase())!==-1
      || member.tc_no.toString().toLowerCase().indexOf(key.toLowerCase())!==-1
      ){
        result.push(member);
      }
    }
    this.members=result;
    if(result.length==0|| !key){ //Geri sildiğimizde ekrana hepsini tekrar getiriyor.
       this.getMembers();
    }
  }

  public searchBooks(key:string):void { //Bu methodu html'de search'a ekle
    const result:Book[]=[];
    for(const book of this.books){
      if(book.name.toLowerCase().indexOf(key.toLowerCase())!==-1
      || book.id.toString().toLowerCase().indexOf(key.toLowerCase())!==-1
      ||book.publisher.toString().toLowerCase().indexOf(key.toLowerCase())!==-1
      || book.author.toString().toLowerCase().indexOf(key.toLowerCase())!==-1
      ){
        result.push(book);
      }
    }
    this.books=result;
    if(result.length==0|| !key){ //Geri sildiğimizde ekrana hepsini tekrar getiriyor.
       this.getBooks();
    }
  }
  
  public issueBooksFunction(NgForm:NgForm,ngFromiki:any,member:Member|any){
    for(this.j=0;this.books.length;this.j++){
      if(this.books[this.j].id==NgForm.value.id){
        console.log("başarılı")
        this.j=this.j+1;
        break;
      }
      }
      for(this.i=0;this.i<this.members.length;this.i++){   
      if(this.members[this.i].id==ngFromiki.value.name_id&&this.members[this.i].aktifMi==true){
      if(this.members[this.i].kitapIdOne!=null && this.members[this.i].kitapIdTwo!=null &&this.members[this.i].kitapIdThree!=null){
        console.log('error popup');
        this.members[this.i].aktifMi=false;
        this.onUpdateMember(this.members[this.i]);
        this._snackBar.open("message"); //Çalışmıyor.
      }
      
      if(this.members[this.i].kitapIdOne==null){
          this.members[this.i].kitapIdOne=NgForm.value.id;
          this.onUpdateMember(this.members[this.i]);
          this.books[this.j].status=false;
          this.onUpdateBook(this.books[this.j]);
          break;
        }
         if(this.members[this.i].kitapIdOne!=null && this.members[this.i].kitapIdTwo==null){
          this.members[this.i].kitapIdTwo=NgForm.value.id;
          this.onUpdateMember(this.members[this.i]);
          this.books[this.j].status=false;
          this.onUpdateBook(this.books[this.j]);
          break;
        }if(this.members[this.i].kitapIdOne!=null && this.members[this.i].kitapIdTwo!=null &&this.members[this.i].kitapIdThree==null ){
          this.members[this.i].kitapIdThree=NgForm.value.id;
          this.members[this.i].aktifMi=false;
          this.onUpdateMember(this.members[this.i]);
          this.books[this.j].status=false;
          this.onUpdateBook(this.books[this.j]);
          break;
        }
      }
    }  
  }
  public returnBooksFunction(NgForm:NgForm){
    console.log(NgForm.value.Bookid); 
    console.log(NgForm.value.Memberid); 

    for(this.j=0;this.books.length;this.j++){
      if(this.books[this.j].id==NgForm.value.Bookid){
        console.log("başarılı")
        this.j=this.j+1;
        break;
      }
      }

    for(this.i=0;this.i<this.members.length;this.i++){
      if(this.members[this.i].id==NgForm.value.Memberid){
        if(this.members[this.i].kitapIdOne==NgForm.value.Bookid){
          this.members[this.i].kitapIdOne=null;
          this.members[this.i].aktifMi=true;
          this.onUpdateMember(this.members[this.i]);
          this.books[this.j].status=true;
          this.onUpdateBook(this.books[this.j]);
        }
        if(this.members[this.i].kitapIdTwo==NgForm.value.Bookid){
          this.members[this.i].kitapIdTwo=null;
          this.members[this.i].aktifMi=true;
          this.onUpdateMember(this.members[this.i]);
          this.books[this.j].status=true;
          this.onUpdateBook(this.books[this.j]);
        }
        if(this.members[this.i].kitapIdThree==NgForm.value.Bookid){ //Status True False olayını ayarla Member true ,book true kontrol et!
          this.members[this.i].kitapIdThree=null;
          this.members[this.i].aktifMi=true;
          this.onUpdateMember(this.members[this.i]);
          this.books[this.j].status=true;
          this.onUpdateBook(this.books[this.j]);
        }
        
      }
    }
  }

  scrollToTop(number:number,numberTwo:number){
    window.scroll(number,numberTwo);
  }
}


