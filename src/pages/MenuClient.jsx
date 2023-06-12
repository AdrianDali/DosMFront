import React from "react";
import '../styles/MenuClient.css'
import { Tab } from "bootstrap/dist/js/bootstrap.bundle";
import Tabla from "../components/Table";
import CUDButtons from "../containers/CUDButtons";
import PiesChart from "./PiesChart";
const Menu = () => {

    return (
        <div className="center">
            <h1 >Clientes</h1>
            <div >
                <Tabla />
            </div>
            <CUDButtons />
            <div style={{ width: "300px", height: "300px", padding: "10px 0" }}>
                <PiesChart />
            </div>

        </div>

    );
}

export default Menu;