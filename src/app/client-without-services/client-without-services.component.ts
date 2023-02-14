import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-without-services',
  templateUrl: './client-without-services.component.html',
  styleUrls: ['./client-without-services.component.css']
})
export class ClientWithoutServicesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  clientArray: any[] = [];
  clientObj:any={
    clientId:0,
    clientName:'',
    businessName:'',
    contactPerson:'',
    contactNo:'',
    altContactNo:'',
    email:'',
    createdDate:new Date(),
    logo:'',
  }

  ngOnInit(): void {
    this.getAllClient();
  }

  getAllClient() {
    this.http.get('http://onlinetestapi.gerasim.in/api/GetValet/GetAllClients').subscribe((result: any) => {
      this.clientArray= result.data
    })
  }
  onSaveClient(){
    this.http.post('http://onlinetestapi.gerasim.in/api/GetValet/AddClient',this.clientObj).subscribe((result:any)=>{
      if(result.result){
        alert('Client Saved')
        this.getAllClient();
      }else{
        alert(result.message)
      }
    })
  }

  onEdit(item:any){
    this.clientObj=item;
  }

  onUpdateClient(){
    this.http.post('http://onlinetestapi.gerasim.in/api/GetValet/UpdateClient',this.clientObj).subscribe((result:any)=>{
      if(result.result){
        alert('Client Updated')
        this.getAllClient();
      }else{
        alert(result.message)
      }
    })
  }
  onDelete(id:number){
    this.http.post('http://onlinetestapi.gerasim.in/api/GetValet/DeleteClient?id='+id,'').subscribe((result:any)=>{
      if(result.result){
        alert('Client Deleted')
        this.getAllClient();
      }else{
        alert(result.message)
      }
    })
  }
}
