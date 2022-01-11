import moment from "moment";
import { TodoModel } from "../../Models/TodoModel";
import "./TodoItem.css";

interface TodoItemProps {
    todo: TodoModel;
}

function TodoItem(props: TodoItemProps): JSX.Element {
    return (
        <div className="TodoItem">
            {/* <h1>TodoItem</h1> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <u>
                <span>{props.todo.title}</span>&nbsp;&nbsp;
            </u>
            <p><span className="title">description: </span>{props.todo.description} </p>
            <p><span className="title">group: </span>{props.todo.group} </p>
            <p><span className="title">when: </span>{moment(props.todo.when).format('DD MMMM YYYY')} </p>
        </div>
    );
}

export default TodoItem;
