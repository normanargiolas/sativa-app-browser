import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Router} from "@angular/router";

export class Todo {
  constructor(public id: number,
              public description: string,
              public done: boolean,
              public targetDate: Date) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: String;

  // todos = [
  //   new Todo(1,'Learn to C++', false,new Date()),
  //   new Todo(1,'Learn to Angular', false,new Date()),
  //   new Todo(1,'Learn to Java', false,new Date()),
  //   new Todo(1,'Learn to Html', false,new Date())
  // ];

  constructor(private service: TodoDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.service.retriveAllTodos("Norman").subscribe(
      responce => {
        this.todos = responce;
      }
    );
  }

  deleteTodo(id) {
    console.log(`Todo id ${id}`);
    this.service.deleteTodo('norman', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete  of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
