import { TodoManagerWithStorage } from "./TodoManagerWithStorage.js";
export class TodoApp {
    constructor() {
        this.todoManager = new TodoManagerWithStorage();
        this.todoContainerE1 = document.querySelector(".todo-container");
        this.titleE1 = document.querySelector(".title h2");
        this.plusBtnE1 = document.querySelector(".add-todo button");
        this.renderTodos();
        this.bindEvents();
    }

    renderTodos() {
        this.todoContainerE1.innerHTML = "";
        this.todoManager.getList().forEach((todo, i) => {
            const todoE1 = this.createTodoE1(todo, i);
            this.todoContainerE1.appendChild(todoE1);
        });
        this.renderTitle();
    }
    createTodoE1(todo, id) {
        const todoE1 = document.createElement("div");
        todoE1.id = "todo-" + id;
        todoE1.className = "todo";
        todoE1.innerHTML = `<input type="checkbox" ${
            todo.done ? "checked" : ""
        }><label>${todo.contents}</label>`;
        return todoE1;
    }

    renderTitle() {
        const now = new Date();
        const month = now.getMonth();
        const date = now.getDate();
        if (this.titleE1) {
            this.titleE1.innerHTML = `${
                month + 1
            }월 ${date}일 <span class="left-count">
            (${this.todoManager.leftTodoCount}개)</span>`;
        }
    }

    bindEvents() {
        this.plusBtnE1.addEventListener("click", (evt) => {
            var textE1 = document.querySelector('.add-todo input[type="text"]');
            this.todoManager.addTodo(textE1.value);
            textE1.value = "";
            this.renderTodos();
        });
        this.todoContainerE1.addEventListener("click", (evt) => {
            if (
                evt.target.nodeName === "INPUT" &&
                evt.target.parentElement.className === "todo"
            ) {
                const clickedE1 = evt.target.parentElement,
                    index = clickedE1.id.replace("todo-", "");

                this.todoManager.getList()[index].toggle();
                this.renderTitle;
            }
        });
    }
}
