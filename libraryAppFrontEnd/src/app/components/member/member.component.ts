import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SharedService } from 'src/app/services/shared/shared.service';
import { BookServiceService } from 'src/app/services/Book/book-service.service';
import { Book } from 'src/app/services/book';
import { HttpErrorResponse } from '@angular/common/http';
import { Member } from 'src/app/services/member';
import { NgForm } from '@angular/forms';
import { Manager } from 'src/app/services/manager';
import { MemberServiceService } from 'src/app/services/Member/member-service.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],

})
export class MemberComponent implements OnInit {
  message!:any;
  public selectedId:any;
  public kitapOne:any;
  public kitapTwo:any;
  public kitapThree:any;
  public books!:Book[];
  public managers!:Manager[];
  public members!:Member[];
  public editMember!:Member;
  public issueBooks!:Book;
  public returnMember!:Member;

  public memberFindId!:Member;
  j!:number;
  public i!:number;
  constructor(private shared:SharedService,private bookService:BookServiceService,private memberService:MemberServiceService) { }


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


  ngOnInit(): void {
    this.message=this.shared.getMessage();
    this.getBooks();
    this.getMembers();
    if(this.message.kitapIdOne!=null)
    this.getBooksIdOne(this.message.kitapIdOne);
    if(this.message.kitapIdTwo!=null)
    this.getBooksIdTwo(this.message.kitapIdTwo);
    if(this.message.kitapIdThree!=null)
    this.getBooksIdThree(this.message.kitapIdThree);
    this.getMembersById(this.message.id);
  }

  public getBooksIdOne(value:any){ 
    this.bookService.getBooksById(value).subscribe( //service'deki fonk'ları kullanarak kişi ekliyor 
    (response:any)=>{
      console.log(response);
      this.kitapOne=response;
    },
        (error : HttpErrorResponse) =>{
          alert(error.message);
        }
    );
  }
  public getBooksIdTwo(value:any){ 
    this.bookService.getBooksById(value).subscribe( //service'deki fonk'ları kullanarak kişi ekliyor 
    (response:any)=>{
      console.log(response);
      this.kitapTwo=response;
    }, 
        (error : HttpErrorResponse) =>{
          alert(error.message);
        }
    );
  }
  public getBooksIdThree(value:any){ 
    this.bookService.getBooksById(value).subscribe( //service'deki fonk'ları kullanarak kişi ekliyor 
    (response:any)=>{
      console.log(response);
      this.kitapThree=response;
    }, 
        (error : HttpErrorResponse) =>{
          alert(error.message);
        }
    );
  }
 
  public getMembersById(value:any){ 
    this.memberService.getMembersById(value).subscribe( //service'deki fonk'ları kullanarak kişi ekliyor 
    (response:any)=>{
      console.log(response);
      this.memberFindId=response;
    },
        (error : HttpErrorResponse) =>{
          alert(error.message);
        }
    );
  }

  public searchBooks(key:string):void { 
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

  public onOpenModal(member:Member|any ,book:Book|any,mode: string):void{ //Employee|any yazmazsak hata veriyor , |null yazarsak çalışmıyor.
    const container=document.getElementById('main-container');  
    const button=document.createElement('button');
      button.type='button';
      button.style.display='none';
      button.setAttribute('data-toggle','modal');
  
      if( mode ==='editMember'){
        this.editMember=member;
        button.setAttribute('data-target','#updateMemberModal');
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

public returnBooksFunction(NgForm:NgForm,ngFromiki:any){
  console.log(NgForm.value.Bookid); 
  console.log(this.message.id);  //Member Id

  for(this.j=0;this.books.length;this.j++){
    if(this.books[this.j].id==ngFromiki.value){
      console.log("başarılı")
      this.j=this.j+1;
      break;
    }
    }

  for(this.i=0;this.i<this.members.length;this.i++){
    if(this.members[this.i].id==this.message.id){
      if(this.members[this.i].kitapIdOne==ngFromiki.value){
        this.members[this.i].kitapIdOne=null;
        this.members[this.i].aktifMi=true;
        this.onUpdateMember(this.members[this.i]);
        this.books[this.j].status=true;
        this.onUpdateBook(this.books[this.j]);
      }
      if(this.members[this.i].kitapIdTwo==ngFromiki.value){
        this.members[this.i].kitapIdTwo=null;
        this.members[this.i].aktifMi=true;
        this.onUpdateMember(this.members[this.i]);
        this.books[this.j].status=true;
        this.onUpdateBook(this.books[this.j]);
      }
      if(this.members[this.i].kitapIdThree=ngFromiki.value){ //Status True False olayını ayarla Member true ,book true kontrol et!
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







// public returnBooksFunction(NgForm:NgForm){
//   console.log(NgForm.value.Bookid);//Değişecek Kitap Id'si 
//   console.log(this.message.id);  //Member Id
//   console.log(this.kitapOne);//Member BookOneId

//   if(NgForm.value.Bookid==this.kitapOne.id){
//     this.message.kitapIdOne=null;
//     this.message.aktifMi=true;
//     this.onUpdateMember(this.message);
//     this.kitapOne.status=true;
//     this.onUpdateBook(this.kitapOne);  
//   }
//   if(NgForm.value.Bookid==this.kitapTwo.id){
//   this.message.kitapIdTwo=null;
//   this.message.aktifMi=true;
//   this.onUpdateMember(this.message);
//   this.kitapTwo.status=true;
//   this.onUpdateBook(this.kitapTwo);  
// }
//   if(NgForm.value.Bookid==this.kitapThree.id){
//   this.message.kitapIdThree=null;
//   this.message.aktifMi=true;
//   this.onUpdateMember(this.message);
//   this.kitapThree.status=true;
//   this.onUpdateBook(this.kitapThree);  
  
//   }
// }



}


