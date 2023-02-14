import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onChangeFile(event: any) {
    debugger;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if(file.type== "image/jpeg" || file.type== "image/png"){
        const formData = new FormData();
        formData.append('file', file);
        this.http.post('http://storeapi.gerasim.in/api/Customer/Upload', formData).subscribe((result: any) => {
          debugger;
        });
      }else{
        alert('Please select only jpeg and png')
      }

    }

  }
}
