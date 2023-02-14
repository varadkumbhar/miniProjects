import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.css']
})
export class CompanyDataComponent implements OnInit {
  issidePanel: boolean = false;
  companydataList: any[] = []

  companyObj: any = {
    companyId: 0,
    companyName: '',
    ceoName: '',
    address: '',
    email: '',
  }

  constructor() { }

  ngOnInit(): void {
    this.getcompanyData();
  }

  getcompanyData() {
    const localCData = localStorage.getItem('companydetails');
    if (localCData != null) {
      this.companydataList = JSON.parse(localCData);
    }

  }

  onSave() {
    this.companyObj.companyId = this.companydataList.length + 1;
    this.companydataList.push(this.companyObj);

    localStorage.setItem('companydetails', JSON.stringify(this.companydataList));
    this.companyObj = {
      companyId: 0,
      companyName: '',
      ceoName: '',
      address: '',
      email: '',
    }
  }

  onEdit(obj: any) {
    this.issidePanel = true;
    this.companyObj = obj
  }
  onUpdate() {
    const record = this.companydataList.find((m: any) => m.companyId == this.companyObj.companyId);

    localStorage.setItem('companydetails', JSON.stringify(this.companydataList));
  }

  onDelete(id: any) {
    for (let index = 0; index < this.companydataList.length; index++) {
      if (this.companydataList[index].companyId == id) {
        this.companydataList.splice(index, 1)
      }
      localStorage.setItem('companydetails', JSON.stringify(this.companydataList));

    }


  }

  addPanel(){
    this.issidePanel=true;
  }
}
