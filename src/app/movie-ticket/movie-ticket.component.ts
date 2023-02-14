import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-ticket',
  templateUrl: './movie-ticket.component.html',
  styleUrls: ['./movie-ticket.component.css']
})
export class MovieTicketComponent implements OnInit {
  ticketArry: any[] = [];
  movieArray: any[] = [];
  movieTicketObj: any;

  isOther: boolean = false;
  isKala: boolean = false;
  isContagian: boolean = false;
  isBahubali: boolean = false;
  ticketPrize: number = 0;


  constructor() {
    this.movieTicketObj = {
      ticketId: 0,
      selectmovie: "",
      timeSlot: "",
      noOfTickets: "",
      totalAmt: 0
    }
  }

  ngOnInit(): void {
    this.readLocalData();
  }
  readLocalData() {
    const localData = localStorage.getItem('movieData');                      // 2] 2nd To read data in Localstorage.
    if (localData != null) {
      this.movieArray = JSON.parse(localData);
    }
  }
  addMovie(values: any) {
    debugger;
    if (values == 'kala') {
      this.isKala = true;
      this.isContagian = false;
      this.isBahubali = false;
      this.ticketPrize = 200;
    }
    else if (values == 'contagian') {
      this.isContagian = true;
      this.isKala = false;
      this.isBahubali = false;
      this.ticketPrize = 300;
    }
    else if (values == 'bahubali') {
      this.isContagian = false;
      this.isKala = false;
      this.isBahubali = true;
      this.ticketPrize = 400;
    }
  }
  onTicketChange(totalTickets: number) {
    this.movieTicketObj.totalAmt = totalTickets * this.ticketPrize;
  }
  onReset() {
    this.movieTicketObj = {
      selectmovie: "",
      timeSlot: "",
      noOfTickets: "",
      totalAmt: 0
    }
  }

  onsave() {
    debugger
    if (this.movieTicketObj.ticketId == 0) {
      this.movieTicketObj.ticketId = this.movieArray.length + 1;                                             // 1] first To save data in Localstorage
      this.movieArray.push(this.movieTicketObj);
      localStorage.setItem('movieData', JSON.stringify(this.movieArray));
    }

  }
}



