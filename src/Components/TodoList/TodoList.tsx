import axios from "axios";
import { useEffect, useState } from "react";
import { TodoModel } from "../../Models/TodoModel";
import globals from "../../Services/Globals";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(): JSX.Element {

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        axios.get<TodoModel[]>(globals.urls.todo)
            .then((response) => {
                setTodoList(response.data as any);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="TodoList">
            <h1 className="h1">TodoList</h1>
            <hr></hr>
            {todoList.length > 0 ?
                <ul className="ul">
                    {todoList.map((todo: any, index) =>
                        <li key={todo.id} className="li">
                            <TodoItem todo={todo} />
                            {/* <span>{todo.id}</span>&nbsp;&nbsp;
                        <span>{todo.title}</span>&nbsp;&nbsp;
                        <span>{todo.description}</span>&nbsp;&nbsp;
                        <span>{todo.group}</span>&nbsp;&nbsp;
                        <span>{todo.when}</span>&nbsp;&nbsp; */}
                        </li>
                    )}
                </ul> :
                <p className="text-2xl">No tasks to show</p>
            }
        </div>
    );
}

export default TodoList;
