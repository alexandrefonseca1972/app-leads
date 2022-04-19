import React from "react";
import { Link } from 'react-router-dom';
import "./styles.css";


export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <div className="arealink">
                <Link to="/cad">Cadastrar</Link>
                <Link to="/list">Listagem</Link>
            </div>
        </div>
    )
}