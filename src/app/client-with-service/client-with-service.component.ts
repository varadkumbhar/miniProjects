import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientSrvService } from '../services/client-srv.service';

@Component({
  selector: 'app-client-with-service',
  templateUrl: './client-with-service.component.html',
  styleUrls: ['./client-with-service.component.css']
})
export class ClientWithServiceComponent implements OnInit {

  constructor(private http: HttpClient, private clientSrv:ClientSrvService) { }
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
    this.clientSrv.getAllClient().subscribe((result: any) => {
      this.clientArray= result.data
    })
  }

  onSaveClient(){
    this.clientSrv.onSaveClient(this.clientObj).subscribe((result:any)=>{
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
   this.clientSrv.onUpdateClient(this.clientObj).subscribe((result:any)=>{
      if(result.result){
        alert('Client Updated')
        this.getAllClient();
      }else{
        alert(result.message)
      }
    })
  }

  onDelete(id:number){
   this.clientSrv.onDelete(id).subscribe((result:any)=>{
      if(result.result){
        alert('Client Deleted')
        this.getAllClient();
      }else{
        alert(result.message)
      }
    })
  }
}
