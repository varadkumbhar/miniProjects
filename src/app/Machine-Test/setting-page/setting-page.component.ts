import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.css']
})
export class SettingPageComponent implements OnInit {
  profileData: isSetting;
  constructor(private http: Router) {
    this.profileData = {
      ProfileShow: false,
      GalleryShow: false,
      AvgShow: false
    }
  }

  ngOnInit(): void {
    const settings = localStorage.getItem('setting');
    if (settings != null) {
      this.profileData = JSON.parse(settings)
    }
  }
  onAddSetting() {
    debugger
    localStorage.setItem('setting', JSON.stringify(this.profileData));
    this.profileData = {
      ProfileShow: false,
      GalleryShow: false,
      AvgShow: false
    }
  }

  backtoHome() {
    this.http.navigateByUrl('Machine_Test')
  }

}
export interface isSetting {
  ProfileShow: boolean,
  GalleryShow: boolean,
  AvgShow: boolean
}
