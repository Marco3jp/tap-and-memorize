import React, {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

// 「記憶詳細」画面
export function MemoryDetailPage() {
    const {memoryId} = useParams();
    if (!memoryId) {
        const navigate = useNavigate();

        useEffect(() => {
            navigate("../", {replace: true})
        })
        return <div></div>
    }

    return (
        <div>
            <h1>MemoryDetail</h1>
            <ul>
                <li>memoryId: {memoryId}</li>
                <li><Link to="../../">top</Link></li>
            </ul>
        </div>
    )
}