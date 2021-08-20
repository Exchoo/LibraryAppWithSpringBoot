import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './components/manager/manager.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerServiceService } from './services/Manager/manager-service.service';
import { FormsModule } from '@angular/forms';
import { MemberComponent } from './components/member/member.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    LoginComponent,
    MemberComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule

    
  ],
  providers: [ManagerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
