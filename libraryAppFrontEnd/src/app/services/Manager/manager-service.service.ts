import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manager } from '../manager';


@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {
  private API_SERVER="http://localhost:8080";
  constructor(private http:HttpClient) { }


  public getManagers() : Observable<Manager[]>{ //employee.ts interface'sinde oluşturduğumuz değişkenleri istiyor.
    return this.http.get<Manager[]>(this.API_SERVER+'/manager/all');
 }

 public addManagers(manager:Manager) : Observable<Manager>{ 
  return this.http.post<Manager>(this.API_SERVER+'/manager/add',manager);
}

public updateManagers(manager:Manager) : Observable<Manager>{ 
  return this.http.put<Manager>(this.API_SERVER+'/manager/update',manager);
}

public deleteManagers(managerId:any) : Observable<any>{ 
  return this.http.delete<void>(this.API_SERVER+'/manager/delete/'+managerId); //Buraya Bak
}

public getManagersById(id:any): Observable<void>{
  return this.http.get<void>(this.API_SERVER+'/manager/find/'+id);
}
}