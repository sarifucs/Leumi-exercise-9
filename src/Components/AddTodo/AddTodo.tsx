import "./AddTodo.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoModel } from "../../Models/TodoModel";
import axios from "axios";
import notify from "../../Services/Notification";

function AddTodo(): JSX.Element {

    const schema = yup.object().shape({
        title:
            yup.string()
                .required("Title is required"),
        description:
            yup.string()
                .required("Description is required"),
        group:
            yup.string()
                .required("Group is required"),
        when:
            yup.date()
                .typeError("You must specify a date")
                .required("When is required")
                .nullable(),

    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<TodoModel>({ mode: "all", resolver: yupResolver(schema) });

    const addTodo = async (todo: TodoModel) => {

        const formData = new FormData();
        formData.append("title", todo.title as string);
        formData.append("description", (todo.description as string));
        formData.append("group", todo.group as string);
        formData.append("when", (todo.when as Date).toString());

        // axios.post<CatModel>('http://localhost:8080/api/cats', formData)
        //     .then(res => { alert(res.data) })
        //     .catch(err => { alert(err.message) })
        await axios.post<TodoModel>('http://localhost:8080/api/todoes/postTodo', formData)
        .then(result=>{
            console.log(result.data);
            notify.success("Added todo successfully");
        })
        .catch(err=>{
            notify.error(err.message);
            // alert(err.message);
        })

    }

    return (
        <div className="AddTodo">
            <h1 className="h1">AddTodo</h1>
            <hr></hr>
            <form onSubmit={handleSubmit(addTodo)} >
                <label>Title</label>
                <input
                    {...register("title")}
                    name="title"
                    type="text"
                    placeholder="title..."
                    className="border-gray-500 border rounded-sm p-1" />

                <span>{errors?.title?.message}</span>

                <label>Description</label>
                <input
                    {...register("description")}
                    name="description"
                    type="text"
                    placeholder="description..."
                    className="border-gray-500 border rounded-sm p-1" />
                <span>{errors?.description?.message}</span>

                <label>Group</label>
                <input
                    {...register("group")}
                    name="group"
                    type="text"
                    placeholder="group..."
                    className="border-gray-500 border rounded-sm p-1" />
                <span>{errors?.group?.message}</span>

                <label>When</label>
                <input
                    {...register("when")}
                    name="when"
                    type="date"
                    placeholder="when..."
                    className="border-gray-500 border rounded-sm p-1" />
                <span>{errors?.when?.message}</span><br />

                <button disabled={!isValid} className="bg-gray-300 w-40 hover:h-8 border-gray-500 border rounded-sm">Submit</button>
            </form>
        </div>
    );
}

export default AddTodo;
