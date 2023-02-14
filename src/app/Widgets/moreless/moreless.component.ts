import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moreless',
  templateUrl: './moreless.component.html',
  styleUrls: ['./moreless.component.css']
})
export class MorelessComponent implements OnInit {

  @Input() text:string;
  @Input() wordLimit: number;
  showMore:boolean;

  constructor() {
    this.showMore=false,
    this.text='',
    this.wordLimit=8
  }

  ngOnInit(): void {
  }

}
