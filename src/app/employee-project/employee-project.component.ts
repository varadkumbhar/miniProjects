import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-project',
  templateUrl: './employee-project.component.html',
  styleUrls: ['./employee-project.component.css']
})
export class EmployeeProjectComponent implements OnInit {
  isSidePanelOpen: boolean = false;

  employeeObj: EmployeeObj;
  sortBy: string;
  searchText: string;
  employeeArr: EmployeeObj[] = [];


  constructor(private http: HttpClient) {
    this.employeeObj = new EmployeeObj();
    this.searchText = '';
    this.sortBy = '';
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }
  addPanel() {
    this.isSidePanelOpen = true;
  }
  onClose() {
    this.isSidePanelOpen = false;
  }

  getAllEmployee() {
    const isData = localStorage.getItem("EmpData");
    if (isData != null) {
      const localData = JSON.parse(isData);
      this.employeeArr = localData;
    }
  }

  onSave() {
    this.employeeArr.push(this.employeeObj);

    const isData = localStorage.getItem('EmpData');
    if (isData == null) {
      const newArr = [];
      this.employeeObj.employeeId = 0;
      newArr.push(this.employeeObj);
      localStorage.setItem("EmpData", JSON.stringify(newArr));

    } else {

      const oldData = JSON.parse(isData);
      const newId = oldData.length + 1;
      this.employeeObj.employeeId = newId;
      oldData.push(this.employeeObj);
      localStorage.setItem("EmpData", JSON.stringify(oldData));
    }
    this.employeeObj = new EmployeeObj();
    this.getAllEmployee();
  }


  onEdit(para: any) {
    this.employeeObj = para;
    this.isSidePanelOpen = true;
  }

  updateEmployee() {
    this.isSidePanelOpen = false
  }

  onDelete(item: EmployeeObj) {
    const isData = localStorage.getItem("EmpData");
    if (isData != null) {
      const localData = JSON.parse(isData);
      for (let index = 0; index < localData.length; index++) {
        if (localData[index].employeeId == item.employeeId) {
          localData.splice(0, 1);
        }
      }
      localStorage.setItem("EmpData", JSON.stringify(localData));
    }
    this.getAllEmployee();
  }


  onClear() {
    const FirstName='';
  }
  onBack(){
    this.isSidePanelOpen = false;
  }

  onSearch() {
    const isData = localStorage.getItem("EmpData");
    if (isData != null) {
      const localData = JSON.parse(isData);
      if (this.sortBy == 'Name') {
        const filterData = localData.filter((m: EmployeeObj) => m.FirstName.toLocaleLowerCase().startsWith(this.searchText.toLocaleLowerCase()) || m.LastName.startsWith(this.searchText))
        this.employeeArr = filterData;
      }
      if (this.sortBy == 'Technology') {
        const filterData = localData.filter((m: EmployeeObj) => m.Technology.toLocaleLowerCase().startsWith(this.searchText.toLocaleLowerCase()) )
        this.employeeArr = filterData;
      }
      if (this.sortBy == 'Designation') {
        const filterData = localData.filter((m: EmployeeObj) => m.Designation.toLocaleLowerCase().startsWith(this.searchText.toLocaleLowerCase()))
        this.employeeArr = filterData;
      }
      if (this.sortBy == 'Skill') {
        const filterData = localData.filter((m: EmployeeObj) => m.Skill.toLocaleLowerCase().startsWith(this.searchText.toLocaleLowerCase()) )
        this.employeeArr = filterData;
      }
      if (this.sortBy == 'Core') {
        const filterData = localData.filter((m: EmployeeObj) => m.Core.toLocaleLowerCase().startsWith(this.searchText.toLocaleLowerCase()) )
        this.employeeArr = filterData;
      }
      if (this.sortBy == 'Company') {
        const filterData = localData.filter((m: EmployeeObj) => m.Company.toLocaleLowerCase().startsWith(this.searchText.toLocaleLowerCase()) )
        this.employeeArr = filterData;
      }
    }
  }

}

export class EmployeeObj {
  employeeId: number;
  FirstName: string;
  LastName: string;
  Technology: string;
  Designation: string;
  Skill: string;
  Core: string;
  isCertification: string;
  Certification: string;
  Company: string;
  FewDetails: string;

  constructor() {
    this.employeeId = 0;
    this.FirstName = "";
    this.LastName = "";
    this.Technology = "";
    this.Designation = "";
    this.Skill = "";
    this.Certification = "";
    this.Core = "";
    this.isCertification = '';
    this.Company = "";
    this.FewDetails = "";

  }

}
