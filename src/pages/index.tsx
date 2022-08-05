import React from "react";
import {Link} from "react-router-dom";

// 「タップ」「記憶一覧」「設定」の選択を出す画面
export function IndexPage() {
    return (
        <div>
            <h1>Hello, World</h1>
            <ul>
                <li><Link to="tap">Tap</Link></li>
                <li><Link to="memory">Memory</Link></li>
            </ul>
        </div>
    )
}