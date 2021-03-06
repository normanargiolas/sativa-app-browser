import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../components/list-todos/list-todos.component";
import {API_URL} from "../../app.constant";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  retriveAllTodos(username) {
    return this.http.get <Todo[]>(`${API_URL}/api/users/${username}/todos`);
  }

  deleteTodo(username, id) {
    return this.http.delete(`${API_URL}/api/users/${username}/todos/${id}`);
  }

  retriveTodo(username, id) {
    return this.http.get <Todo>(`${API_URL}/api/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.http.put <Todo>(`${API_URL}/api/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo) {
    return this.http.post <Todo>(`${API_URL}/api/users/${username}/todos`, todo);
  }

}
