import React from "react";
import {Link} from "react-router-dom";
import {BasicButton} from "../../components/shared/basicButton";

// 「記録」画面
export function TapPage() {
    return (
        <div>
            <h1>Tap</h1>
            <BasicButton text={"sample text"} height={"100px"} />
            <ul>
                <li>aa</li>
                <li><Link to="../">top</Link></li>
            </ul>
        </div>
    )
}
