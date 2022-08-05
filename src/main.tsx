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
    const baseUrl = import.meta.env.BASE_URL
    root.render(
        <BrowserRouter>
            <Routes>
                <Route path={baseUrl} element={<IndexPage/>}/>
                <Route path={baseUrl+"memory"} element={<MemoryListPage/>}/>
                <Route path={baseUrl+"memory/:memoryId"} element={<MemoryDetailPage/>}/>
                <Route path={baseUrl+"tap"} element={<TapPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}