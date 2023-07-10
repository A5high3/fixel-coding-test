import axios from "axios";
import { ToDoObject } from "../App";

export default class HttpRequests {
  public async registTodo(requestId: number, todoTitle: string): Promise<void> {
    await axios.post("http://localhost:4000/todo", {
      id: requestId,
      title: todoTitle,
      state: "NOTYET",
    });
  }

  public async fetchAllTodo(): Promise<ToDoObject[]> {
    const result = await axios.get("http://localhost:4000/todo");
    console.log("result", result);
    return result.data as ToDoObject[];
  }

  public async changeTodoState(requestObject: ToDoObject): Promise<void> {
    await axios.put(`http://localhost:4000/todo/${requestObject.id}`, requestObject);
    return;
  }

  public async deleteTodo(requestObject: ToDoObject): Promise<void> {
    await axios.delete(`http://localhost:4000/todo/${requestObject.id}`);
    return;
  }
}
