import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientSrvService {

  constructor(private http :HttpClient) { }


  getAllClient():Observable<any[]> {
   return this.http.get<any[]>('http://onlinetestapi.gerasim.in/api/GetValet/GetAllClients');
  }

  onSaveClient(Obj:any):Observable<any>{
   return this.http.post<any>('http://onlinetestapi.gerasim.in/api/GetValet/AddClient',Obj);
  }

  onUpdateClient(Obj:any){
   return this.http.post('http://onlinetestapi.gerasim.in/api/GetValet/UpdateClient',Obj);
  }

  onDelete(id:number){
   return this.http.post('http://onlinetestapi.gerasim.in/api/GetValet/DeleteClient?id='+id,'');
  }
}
