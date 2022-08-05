import React from "react";
import {Link} from "react-router-dom";

// 「記録」画面
export function TapPage() {
    return (
        <div>
            <h1>Tap</h1>
            <ul>
                <li>aa</li>
                <li><Link to="../">top</Link></li>
            </ul>
        </div>
    )
}
