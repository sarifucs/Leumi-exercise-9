import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <h1 className="h1">Menu</h1>
            <nav className="nav">
                <Link to="/" className="underline my-12 hover:text-indigo-800 hover:text-lg">Home</Link>
                <Link to="todoList" className="underline my-12 hover:text-indigo-800  hover:text-lg">Todo list</Link>
                <Link to="todoList/addTodo" className="underline my-12 hover:text-indigo-800  hover:text-lg">Add todo</Link>
            </nav>
        </div>
    );
}

export default Menu;
