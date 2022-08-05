import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {IndexPage} from "./pages";
import {TapPage} from "./pages/tap";
import {MemoryDetailPage} from "./pages/memory/_id";
import {MemoryListPage} from "./pages/memory";

const baseElement = document.querySelector("#root");

if (baseElement) {
    const root = ReactDOM.createRoot(baseElement);
    root.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/memory" element={<MemoryListPage/>}/>
                <Route path="/memory/:memoryId" element={<MemoryDetailPage/>}/>
                <Route path="/tap" element={<TapPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}