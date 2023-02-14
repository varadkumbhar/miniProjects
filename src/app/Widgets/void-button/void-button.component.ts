import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-void-button',
  templateUrl: './void-button.component.html',
  styleUrls: ['./void-button.component.css']
})
export class VoidButtonComponent implements OnInit {

  @Input() text: string;
  @Input() btnClass: string;
  @Output() OnClick= new EventEmitter<string>();

  constructor() {
    this.text = '',
    this.btnClass=''
  }

  ngOnInit(): void {
  }
  emitEvent(){
    debugger;
    this.OnClick.emit('test');
  }

}
