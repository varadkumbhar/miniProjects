import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-local-storage',
  templateUrl: './client-local-storage.component.html',
  styleUrls: ['./client-local-storage.component.css']
})
export class ClientLocalStorageComponent implements OnInit {
  clientList: any[] = [];

  clientObj: any = {
    clientId: 0,
    clientName: '',
    businessName: '',
    contactPerson: '',
    contactNo: '',
    altContactNo: '',
    email: '',
    createdDate: new Date(),
    logo: '',
  }

  isSidePanel: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllClient();
  }
  addpanel(item:any) {
    debugger;
    this.isSidePanel = true;
  }
  closepanel() {
    this.isSidePanel = false;
  }

  getAllClient() {
    const localData = localStorage.getItem('Clientdata');
    if (localData != null) {
      this.clientList = JSON.parse(localData);
    }
  }

  onSaveClient() {
    this.clientObj.clientId = this.clientList.length + 1;
    this.clientList.push(this.clientObj);
    localStorage.setItem('Clientdata', JSON.stringify(this.clientList));
    this.clientObj = {
      clientId: 0,
      clientName: '',
      businessName: '',
      contactPerson: '',
      contactNo: '',
      altContactNo: '',
      email: '',
      createdDate: new Date(),
      logo: '',
    }
  }

  onEdit(obj: any) {
    this.isSidePanel = true;
    this.clientObj = obj;
  }

  onUpdateClient() {
    const record = this.clientList.find((m: any) => m.clientId == this.clientObj.clientId);
    if (record != undefined) {
      record.clientName = this.clientObj.clientName;
      record.businessName = this.clientObj.businessName;
    }
    localStorage.setItem('Clientdata', JSON.stringify(this.clientList));
    this.clientObj = {
      clientId: 0,
      clientName: '',
      businessName: '',
      contactPerson: '',
      contactNo: '',
      altContactNo: '',
      email: '',
      createdDate: new Date(),
      logo: '',
    }
  }

  onDelete(id: any) {

    for (let index = 0; index < this.clientList.length; index++) {
      if (this.clientList[index].clientId == id) {
        this.clientList.splice(index, 1);
      }
    }
    localStorage.setItem('Clientdata', JSON.stringify(this.clientList));
  }

}
