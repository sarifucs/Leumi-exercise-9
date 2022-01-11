import { Outlet } from "react-router-dom";
import Routing from "../Routing/Routing";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
            <h1 className="h1">Main</h1>
            <Routing />
            <Outlet />
        </div>
    );
}

export default Main;
