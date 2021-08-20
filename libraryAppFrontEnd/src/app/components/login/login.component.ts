import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Manager } from 'src/app/services/manager';
import { Member } from 'src/app/services/member';
import { ManagerServiceService } from 'src/app/services/Manager/manager-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MemberServiceService } from 'src/app/services/Member/member-service.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  public managers!:Manager[];
  public members!: Member[];
  public ad!:string ;
  public sifre:any;
  public routerr!:string;

  public send!:Member|Manager;
  i=0;



  
  constructor(private managerService:ManagerServiceService,private memberService:MemberServiceService,private router:Router,private sharedService:SharedService) { }

  message!:Member|Manager;


  public getManagers():void{ 
    this.managerService.getManagers().subscribe(
      (response:Manager[])=>{
        this.managers = response; // employee.ts'de getEmployees'ten return ettirilen değeri employees'e aktardık ki .html'de çağırabilelim.
        console.log(response);
      },
        (error : HttpErrorResponse) =>{
          alert(error.message);
        }
    );
  }

  public getMembers():void{ 
    this.memberService.getMembers().subscribe(
      (response:Member[])=>{
        this.members = response; 
        console.log(response);
      },
        (error : HttpErrorResponse) =>{
          alert(error.message);
        }
    );
  }



  ngOnInit(): void {
    this.getManagers();
    this.getMembers();
    this.sharedService.setMessage(this.message);
  }


  public login(loginForm:NgForm,managers:any,members:any):void{
    for(this.i=0;this.i<managers.length ;this.i++ ){
     if(loginForm.value.name== managers[this.i].name && loginForm.value.pass==managers[this.i].pass){
      this.send=managers[this.i];  
      this.sharedService.setMessage(this.message);
      this.router.navigate(['../manager']);
      
        
      }
    }
    for(this.i=0;this.i<this.members.length ;this.i++ ){
    if(loginForm.value.name== this.members[this.i].name && loginForm.value.pass==this.members[this.i].pass){
      this.send=members[this.i];
      this.sharedService.setMessage(members[this.i]);
      this.router.navigate(['../member']);
    }
  }
  }

 
}
