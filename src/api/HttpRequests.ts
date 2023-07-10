import axios from "axios";

export default class HttpRequests {
  public async registTodo(todoTitle: string) {
    await axios.post("http://localhost:4000/todo", {
      id: 5,
      title: todoTitle,
      state: "NOTYET",
    });
  }
}
