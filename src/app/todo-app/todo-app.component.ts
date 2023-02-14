import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  todoItem: string = '';
  todoItemArray: any[] = [];
  todoObj: any = {
    todoItem: '',
    color: ''
  }

  isshow: boolean;


  constructor(private http: HttpClient) {
    this.isshow = false;
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('todoItems');
    if (localData != null) {
      this.todoItemArray = JSON.parse(localData);
    }
  }
  isShow() {
    this.isshow = true;
  }

  onItemAdd() {
    this.todoItemArray.push(this.todoObj);
    localStorage.setItem('todoItems', JSON.stringify(this.todoItemArray));
    this.todoItem = '';
    this.todoObj = {
      todoItem: '',
      color: ''
    }
  }
  onClear(){
    this.todoObj = {
      todoItem: '',
      color: ''
    }
  }

}
