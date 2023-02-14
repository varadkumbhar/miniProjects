import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  homeArray: any = [];

  profileObj: any;
  galleryObj: any='';
  AvgScore:any='';

  pScore: number = 0;
  gScore:number=0;
  constructor() {
    this.profileObj = {
      firstName: '',
      lastName: '',
      designation: '',
      currntEmployment: ''
    }
  }

  ngOnInit(): void {
    const homeItem = localStorage.getItem('setting');
    if (homeItem != null) {
      this.homeArray = JSON.parse(homeItem)
    }

    const profileItem = localStorage.getItem('profileData');
    if (profileItem != null) {
      this.profileObj = JSON.parse(profileItem)
    }
    if (this.profileObj.firstName != "" && this.profileObj.lastName != "" && this.profileObj.designation != "" && this.profileObj.currntEmployment != "") {
      this.pScore = 100;
    }else{
      this.pScore=50;
    }

    const galleryItem=localStorage.getItem('lengthImg');
    if(galleryItem!=null){
      this.galleryObj=JSON.parse(galleryItem);
    }
    if(this.galleryObj>5){
      this.gScore=100;
    }else{
     this.gScore=50 ;
    }

    const AverageItem=((this.pScore+this.gScore)/2);
    this.AvgScore=AverageItem;
  }

}
