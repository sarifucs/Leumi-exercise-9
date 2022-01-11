import { Routes, Route } from "react-router-dom";
import App from "../../App";
import AddTodo from "../AddTodo/AddTodo";
import Home from "../Home/Home";
import TodoList from "../TodoList/TodoList";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="home" element={<Home />} />
                <Route index element={<Home />} />
                <Route path="todoList" element={<TodoList />} />
                <Route path="todoList/addTodo" element={<AddTodo />} />
                <Route path="*" element={''} />
            </Routes>
        </div>
    );
}

export default Routing;
