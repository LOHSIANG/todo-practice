import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title: string = '';
  todoItem: string = '';
  todoItems: Array<string> = [];
  
  isUpdateOpen: boolean = false;
  updateIndex: number = -1;
  // updateText: string = '';

  ngOnInit(): void {
  }

  addItem() {
    if (this.todoItem.trim() !== '') {
      this.todoItems.push(this.todoItem);
      this.todoItem = '';
    }
  }

  openUpdateForm(index: number) {
    this.isUpdateOpen = true;
    this.updateIndex = index;
    this.todoItem = this.todoItems[index];
  }

  cancelUpdate() {
    this.isUpdateOpen = false;
    this.todoItem = '';
  }

  updateItem() {
    if (this.todoItem.trim() !== '') {
      this.todoItems[this.updateIndex] = this.todoItem;
      this.todoItem = '';
      this.isUpdateOpen = false;
    }
  }
  
  deleteItem(index: number) {
    this.todoItems.splice(index, 1);
  }

}
