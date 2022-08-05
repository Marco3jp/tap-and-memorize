import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
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
                <Route path={baseUrl} element={<Outlet/>}>
                    <Route index element={<IndexPage/>}/>
                    <Route path="memory" element={<Outlet/>}>
                        <Route index element={<MemoryListPage/>} />
                        <Route path=":memoryId" element={<MemoryDetailPage/>}/>
                    </Route>
                    <Route path="tap" element={<TapPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}