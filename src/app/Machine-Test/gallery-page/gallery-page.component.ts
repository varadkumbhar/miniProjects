import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {
  galleryImageArr: any = [];
  userImageArr: any = []
  galleryObj: any

  constructor(private http: Router) {
    this.galleryObj = {
      imageName: '',
      imageUrl: ''
    };

    this.galleryImageArr = [
      {
        imageName: 'Cartoon1',
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/369/925/184/mickey-mouse-lovely-cartoon-classic-mickey-mouse-photo-wallpaper-preview.jpg'
      },
      {
        imageName: 'Cartoon2',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZfL4PPzg2cRNYX0-xkotALnVKuAOlep_zVIoCz4T-RRC3omYW6qRpyS2sSu08HeYUcU&usqp=CAU'
      },
      {
        imageName: 'Cartoon3',
        imageUrl: 'https://mobimg.b-cdn.net/v3/fetch/54/54384b5fd4634be174c409ecf47a38be.jpeg'
      },

      {
        imageName: 'Cartoon4',
        imageUrl: 'https://i.pinimg.com/736x/dd/39/23/dd3923cdb88025d3df8181a6fcd79e75.jpg'
      },

      {
        imageName: 'Cartoon5',
        imageUrl: 'https://i.pinimg.com/236x/59/60/06/596006c4ac8b6733dc497bb968e1fef7--cartoon-characters.jpg'
      },
      {
        imageName: 'Cartoon6',
        imageUrl: 'https://i.pinimg.com/1200x/36/2c/c9/362cc9a30f70d8f55df7e97653b098a7.jpg'
      },
      {
        imageName: 'Cartoon7',
        imageUrl: 'https://mobimg.b-cdn.net/v3/fetch/4a/4a5518b6971faeb49cbebb05b834f47c.jpeg'
      },
      {
        imageName: 'Cartoon8',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_eZe8uRMHa8DFd0Rqfxaziis4900eaCxhBC-1WBIjBJ37JR3Gtj7vaNCCoBehMO1D_A&usqp=CAU'
      }

    ]
   }

  ngOnInit(): void {
    const localdata = localStorage.getItem('imageUrl');
    if (localdata != null) {
      this.userImageArr = JSON.parse(localdata)
    }
  }
  OnAddImage() {
    debugger;
    this.userImageArr.push(this.galleryObj.imageUrl);

  }

  OnImageSave() {
    localStorage.setItem("imageUrl", JSON.stringify(this.userImageArr));
    const Count= this.userImageArr.length;
    localStorage.setItem('lengthImg',(Count));
  }

  OnBackImg() {
    this.http.navigateByUrl('Machine_Test')
  }

}
