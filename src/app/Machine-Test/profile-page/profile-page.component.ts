import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  profileObj: any;
  profileArr = []

  profileScore: any = 0;
  constructor(private http: Router) {
    this.profileArr = []

    this.profileObj = {
      firstName: '',
      lastName: '',
      designation: '',
      currntEmployment: ''
    }
   }

  ngOnInit(): void {
    const getData = localStorage.getItem('profileData');
    if (getData != null) {
      this.profileObj = JSON.parse(getData)
    }
  }
  OnSave() {
    debugger
    localStorage.setItem('profileData', JSON.stringify(this.profileObj));

    const profile = localStorage.getItem('profileData');
    if (profile != null) {
      this.profileObj = JSON.parse(profile);
      if (this.profileObj.firstName != "" && this.profileObj.lastName != "" && this.profileObj.designation != "" && this.profileObj.currentEmployee != "") {
        this.profileScore = 100;
        alert('100')
      }
      else {
        this.profileScore = 50;
        alert('50')
      }
    }
  }

}

// export interface Iprofile{
//   firstName:string;
//   lastName:string;
//   designation:string;
//   currntEmployment:string;
// }

