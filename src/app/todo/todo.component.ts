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
  updateText: string = '';

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
    this.updateText = this.todoItems[index];
  }

  closeUpdateForm() {
    this.isUpdateOpen = false;
    this.updateIndex = -1;
    this.updateText = '';
  }

  updateItem() {
    if (this.updateText.trim() !== '') {
      this.todoItems[this.updateIndex] = this.updateText;
      this.closeUpdateForm();
    }
  }
  
  deleteItem(index: number) {
    this.todoItems.splice(index, 1);
  }

}
