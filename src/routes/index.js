import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Cadastro from '../pages/cadastro';
import Listagem from '../pages/list';

export default function Rts() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cad" element={<Cadastro />} />
                <Route path="/list" element={<Listagem />} />
            </Routes>
        </BrowserRouter>
    );
}