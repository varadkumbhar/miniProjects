import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { clientClass } from '../classes/client';

@Component({
  selector: 'app-client-reactive-from-localstorage',
  templateUrl: './client-reactive-from-localstorage.component.html',
  styleUrls: ['./client-reactive-from-localstorage.component.css']
})
export class ClientReactiveFromLocalstorageComponent implements OnInit {
[x: string]: any;

  issidepanelOpen: boolean = false;
  clientLIST:any[]=[];
  clientOBJ : clientClass;

  clientForm: FormGroup



  constructor() {
    debugger;
    this.clientForm = new FormGroup({
      clientId: new FormControl(0),
      clientName: new FormControl(''),
      businessName: new FormControl(''),
      contactPerson: new FormControl(''),
      contactNo: new FormControl(''),
      altContactNo: new FormControl(''),
      email: new FormControl(''),
      createdDate: new FormControl(new Date()) ,
      logo: new FormControl('')
    })

    this.clientOBJ = new clientClass();
  }

  ngOnInit(): void {
    this.getAllClient();
  }

  addpanel() {
    this.issidepanelOpen = true;
  }
  closepanel() {
    this.issidepanelOpen = false;
  }

  getAllClient() {
    debugger;
    const localDATA = localStorage.getItem('ClientDATA');
    if (localDATA != null) {
      this.clientLIST = JSON.parse(localDATA);
    }
  }

  onsaveClient() {
    debugger;
     this.clientOBJ = this.clientForm.value;
    this.clientOBJ.clientId = this.clientLIST.length + 1;
    this.clientLIST.push(this.clientOBJ);
    localStorage.setItem('ClientDATA', JSON.stringify(this.clientLIST));

    this.addpanel();
  }

  onEdit(obj:any){
    this.issidepanelOpen = true;
    this.clientForm.controls=obj;
  }

  onUpdateClient(){
    const record = this.clientLIST.find((m: any) => m.clientId == this.clientOBJ.clientId);
    if (record != undefined) {
      record.clientName = this.clientOBJ.clientName;
      record.businessName = this.clientOBJ.businessName;
    }
  }

}
