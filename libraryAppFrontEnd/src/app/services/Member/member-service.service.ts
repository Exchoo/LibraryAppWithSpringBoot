import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../member';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {
  private API_SERVER="http://localhost:8080";
  constructor(private http:HttpClient) { }


  public getMembers() : Observable<Member[]>{ //employee.ts interface'sinde oluşturduğumuz değişkenleri istiyor.
    return this.http.get<Member[]>(this.API_SERVER+'/member/all');
 }

 public addMember(member:Member) : Observable<Member>{ 
  return this.http.post<Member>(this.API_SERVER+'/member/add',member);
}

public updateMembers(member:Member) : Observable<Member>{ 
  return this.http.put<Member>(this.API_SERVER+'/member/update',member);
}

public deleteMembers(memberId:any) : Observable<any>{ 
  return this.http.delete<void>(this.API_SERVER+'/member/delete/'+memberId); //Buraya Bak
}

public getMembersById(id:any): Observable<void>{
  return this.http.get<void>(this.API_SERVER+'/member/find/'+id);
}


}
