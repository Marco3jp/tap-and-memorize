import React from "react";
import {Link} from "react-router-dom";

// 「記憶一覧」画面
export function MemoryListPage() {
    return (
        <div>
            <h1>MemoryList</h1>
            <ul>
                <li><Link to="sample">sample</Link></li>
                <li><Link to="test">test</Link></li>
                <li><Link to="../../">top</Link></li>
            </ul>
        </div>
    )
}