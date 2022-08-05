import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {IndexPage} from "./pages";
import {TapPage} from "./pages/tap";
import {MemoryDetailPage} from "./pages/memory/_id";
import {MemoryListPage} from "./pages/memory";
import {Nest} from "./components/nest";

const baseElement = document.querySelector("#root");

if (baseElement) {
    const root = ReactDOM.createRoot(baseElement);
    const baseUrl = import.meta.env.BASE_URL
    root.render(
        <BrowserRouter>
            <Routes>
                <Route path={baseUrl} element={<Nest/>}>
                    <Route index element={<IndexPage/>}/>
                    <Route path="memory" element={<Nest/>}>
                        <Route index element={<MemoryListPage/>} />
                        <Route path=":memoryId" element={<MemoryDetailPage/>}/>
                    </Route>
                    <Route path="tap" element={<TapPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}